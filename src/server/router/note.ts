import { z } from "zod";
//import { Prisma } from "@prisma/client";
import { t } from "../trpc";
import { prisma } from "../db/client";

/*const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
    title: true,
    body: true,
    type: true,
});*/

export const noteRouter = t.router({
    getNotes: t.procedure.query(async () => {
            return await prisma.note.findMany();
        },
    ),
    createNote: t.procedure
    .input( z.object({ title: z.string().min(5), body: z.string().min(5).max(200), type: z.string().min(4) }) )
    .mutation(async ({ input }) => {
        const { title, body, type } = input;
        const note = await prisma.note.create({ 
            data: {
                title: title,
                body: body,
                type: type,
            },
        });

        return note;
    }),
});