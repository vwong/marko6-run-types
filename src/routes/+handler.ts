import * as z from "zod";

export const GET = Run.GET({
  search: z.object({
    foo: z.string().default("default-value"),
  }),
}, (ctx) => {
  // comment this to break the code
  const [] = ctx.search;
});
