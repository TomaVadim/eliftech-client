import * as zod from "zod";

export const EventResponseSchema = zod.object({
  _id: zod.string(),
  id: zod.number(),
  title: zod.string(),
  description: zod.string(),
  date: zod.string().date(),
  organizer: zod.string(),
});

export type EventResponse = zod.infer<typeof EventResponseSchema>;
