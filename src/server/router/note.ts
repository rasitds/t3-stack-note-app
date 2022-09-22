import { z } from "zod";
//import { Prisma } from "@prisma/client";
import { t } from "../trpc";
import { prisma } from "../db/client";
import { useSession } from "next-auth/react";

/*const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
    title: true,
    body: true,
    type: true,
});*/

export const noteRouter = t.router({
    getNotes: t.procedure
    .query(async ({ ctx }) => {
            return await prisma.note.findMany({ where: { userId: ctx.session?.user?.id } });
        },
    ),
    createNote: t.procedure
    .input( z.object({ title: z.string().min(5), body: z.string().min(5).max(200), type: z.string().min(4) }) )
    .mutation(async ({ ctx, input }) => {
        const { title, body, type } = input;

        const userId = ctx.session?.user?.id;
        if (!userId)
            return;

        const note = await prisma.note.create({ 
            data: {
                title: title,
                body: body,
                type: type,
                userId: userId,
            },
        });

        return note;
    }),
    deleteNote: t.procedure
    .input( z.object({ noteId: z.string() }) )
    .mutation(async ({ input }) => {
        const { noteId } = input;

        const deleteNote = await prisma.note.delete({
            where: {
                id: noteId
            },
        });

        return deleteNote;
    })
});