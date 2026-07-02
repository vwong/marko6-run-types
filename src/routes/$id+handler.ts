// $id/+handler.ts
export const GET = Run.GET(
  {
    params(value) {
      return { id: Number(value.id) };
    },
  },
  (context) => {
    context.params.id; // number
  },
);
