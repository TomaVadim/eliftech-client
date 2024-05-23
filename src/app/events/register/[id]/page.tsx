import { Metadata } from "next";

import { Paper, Typography } from "@mui/material";

import { RegisterForm } from "./form";
import { fetcher } from "@/api/fetcher";
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

export default function Register({ params }: { params: { id: string } }) {
  return (
    <section className="h-screen flex items-center justify-center">
      <Paper elevation={3} sx={{ width: "min(90%, 400px)", p: "2rem" }}>
        <Typography
          component="h1"
          variant="h4"
          fontWeight={500}
          sx={{ mb: "1rem", textAlign: "center" }}
        >
          Register to event
        </Typography>

        <RegisterForm id={params.id} />
      </Paper>
    </section>
  );
}
