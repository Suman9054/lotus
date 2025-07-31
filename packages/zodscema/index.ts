import * as z from "zod/v4";

const roomdataSchema = z.object({
  roomname: z.string(),
  add: z
    .object({
      name: z.string(),
    })
    .optional(),
});


const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type RoomData = z.infer<typeof roomdataSchema>;

export type LoginData = z.infer<typeof loginSchema>;
