import * as zod from "zod";

export const ParticipantResponseSchema = zod.object({
  fullName: zod.string(),
  email: zod.string(),
  dateOfBirth: zod.string(),
  selectedOption: zod.string(),
});
export type ParticipantResponse = zod.infer<typeof ParticipantResponseSchema>;
