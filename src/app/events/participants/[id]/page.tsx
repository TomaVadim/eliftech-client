import {
  Container,
  Grid,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";

import { fetcher } from "@/api/fetcher";
import { ParticipantResponseSchema } from "@/schemas/participants-response/participants-response";
import { Participants } from "@/components/participants/participants";

export default async function ParticipantsAppropriatedToEvent({
  params,
}: {
  params: { id: string };
}) {
  const fetchParticipants = async () => {
    try {
      const response = await fetcher(`/events/participants`, {
        params: { eventId: params.id },
      });

      const validatedResponse = ParticipantResponseSchema.array().parse(
        response.data
      );

      return validatedResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const participants = await fetchParticipants();

  return (
    <Container component="section">
      {participants && <Participants participants={participants} />}
    </Container>
  );
}
