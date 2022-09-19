import { z } from "zod";
import { createRouter } from "./context";
import { Prisma } from "@prisma/client";

const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
    title: true,
    body: true,
    type: true,
});

export const noteRouter = createRouter()
    .query('getNotes', {
        async resolve({ ctx }) {
            return await ctx.prisma.note.findMany();
        },
    })
    .mutation('createNote', {
        input: z.object({ title: z.string().min(5), body: z.string().min(5).max(200), type: z.string().min(4) }),
        resolve: async ({ input, ctx }) => {
            const { title, body, type } = input;
            return await ctx.prisma.note.create({ 
                data: {
                    title: title,
                    body: body,
                    type: type,
                },
             });
        },
    });