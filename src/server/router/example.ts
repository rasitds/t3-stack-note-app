//import { createRouter } from "./context";
import { z } from "zod";
import { t } from "../trpc";
import { prisma } from "../db/client";

export const exampleRouter = t.router({
  hello: t.procedure.input( z
    .object({
      text: z.string().nullish(),
    })
    .nullish()
  ).query(({ input }) => `Hello ${input?.text ?? "world"}`),
  getTechnologyCards: t.procedure.query(() => {
      const cards = [
          { 
            name: "NextJS", 
            description: "The React framework for production", 
            documentation: "https://nextjs.org/"
          },
          { 
            name: "TypeScript", 
            description: "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale", 
            documentation: "https://www.typescriptlang.org/"
          },
          { 
            name: "TailwindCSS", 
            description: "Rapidly build modern websites without ever leaving your HTML", 
            documentation: "https://tailwindcss.com/"
          },
          { 
            name: "tRPC", 
            description: "End-to-end typesafe APIs made easy", 
            documentation: "https://trpc.io/"
          },
          { 
            name: "Next-Auth", 
            description: "Authentication for Next.js", 
            documentation: "https://next-auth.js.org/"
          },
          { 
            name: "Prisma", 
            description: "Build data-driven JavaScript & TypeScript apps in less time", 
            documentation: "https://www.prisma.io/docs/"
          }
      ];
      return cards;
  }),
  getAll: t.procedure.query(async () => {
    const examples = await prisma.example.findMany();
    return examples;
  }),
});
