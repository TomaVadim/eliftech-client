import { Container } from "@mui/material";

import { fetcher } from "@/api/fetcher";
import { ParticipantResponseSchema } from "@/schemas/participants-response/participants-response";
import { Participants } from "@/components/participants/participants";
import { Metadata } from "next";
import { EventResponseSchema } from "@/schemas/event-response/event-response";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const response = await fetcher("/events", { params: { eventId: params.id } });

  if (!response.data) {
    return {
      title: `Eventer | Event not found`,
    };
  }

  const validatedResponse = EventResponseSchema.parse(response.data);

  return {
    title: `Eventer | ${validatedResponse.title}`,
  };
};

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
