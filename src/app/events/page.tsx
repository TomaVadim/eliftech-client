import { Container, Typography } from "@mui/material";

import { EventsDashboards } from "@/components/events-dashboard/events-dashboards";
import { EVENTS_LIST } from "@/constants/events-list";

export default function Events() {
  return (
    <Container component="section" sx={{ height: "100vh" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", my: "2rem" }}
      >
        Events
      </Typography>

      <EventsDashboards list={EVENTS_LIST} />
    </Container>
  );
}
