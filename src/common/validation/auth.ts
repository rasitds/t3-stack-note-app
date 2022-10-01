import { z } from "zod";


export const userSchema = z.object({
    username: z.string().min(4),
    password: z.string().min(4),
});

export type IUser = z.infer<typeof userSchema>;