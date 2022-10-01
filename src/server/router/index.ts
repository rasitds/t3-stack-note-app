// src/server/router/index.ts
import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { noteRouter } from "./note";
import { t } from "../trpc";
import { userRouter } from "./user";

export const appRouter = t.router({
  example: exampleRouter,
  auth: protectedExampleRouter,
  note: noteRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
