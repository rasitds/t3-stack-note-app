import { z } from 'zod';
import { t } from '../trpc';
import { prisma } from '../db/client';
import { userSchema } from '../../common/validation/auth';

export const userRouter = t.router({
    createUser: t.procedure
    .input(userSchema)
    .mutation(async ({ input }) => {
        const { username, password } = input;

        const user = await prisma.user.create({
            data: {
                username: username,
                password: password,
            },
        });

        return { status: 201,
        message: "Successful",
    result: username };
    })
})