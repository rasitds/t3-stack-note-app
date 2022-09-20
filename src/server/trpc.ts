import { initTRPC } from "@trpc/server";
import { Context } from "./router/context";
import superjson from 'superjson';

export const t = initTRPC
    .context<Context>()
    .create({
        errorFormatter({ shape }) {
            return shape;
        },
        transformer: superjson,
    })