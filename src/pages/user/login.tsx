import { useCallback } from 'react';
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { IUser, userSchema } from "../../common/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react";
import Head from "next/head";

const Login: NextPage = () => {
    const { register, handleSubmit } = useForm<IUser>({
        resolver: zodResolver(userSchema),
    })

    const onSubmit = useCallback(async (data: IUser) => {
        await signIn("credentials", { ...data, callbackUrl: "/dashboard" });
    }, []);

    return (<div>
        <Head>
            <title>Next App - Login</title>
        </Head>

        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} />
                <input type="password" {...register("password")} />
                <button type="submit">Login</button>
            </form>
        </main>
    </div>)
}

export default Login;