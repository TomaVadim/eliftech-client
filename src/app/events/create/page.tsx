import { Paper, Typography } from "@mui/material";

import { CreateNewEventForm } from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventer | Create new event",
  description: "Create new event",
};

export default function Create() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Paper elevation={3} sx={{ width: "min(90%, 400px)", p: "2rem" }}>
        <Typography
          component="h1"
          variant="h4"
          fontWeight={500}
          sx={{ mb: "1rem", textAlign: "center" }}
        >
          Register new event
        </Typography>

        <CreateNewEventForm />
      </Paper>
    </section>
  );
}
