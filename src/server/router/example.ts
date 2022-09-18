import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getTechnologyCards", {
    resolve() {
      return {
        cards: [
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
        ],
      }
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
