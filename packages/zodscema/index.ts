import * as z from "zod/v4";

const roomdataSchema = z.object({
  roomname: z.string(),
  add: z
    .object({
      name: z.string(),
    })
    .optional(),
});

export type RoomData = z.infer<typeof roomdataSchema>;
