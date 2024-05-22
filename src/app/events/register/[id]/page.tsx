import { Paper, Typography } from "@mui/material";
import { RegisterForm } from "./form";

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
          Event registration
        </Typography>

        <RegisterForm id={params.id} />
      </Paper>
    </section>
  );
}
