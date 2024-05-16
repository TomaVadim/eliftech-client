import { Container, Typography } from "@mui/material";

export default function ParticipantsAppropriatedToEvent({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Container component="section">
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", my: "2rem" }}
      >
        Participants
      </Typography>
    </Container>
  );
}
