import Link from "next/link";

import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { EventProps } from "@/shared/interfaces/event";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const EventCard = (props: EventProps): JSX.Element => {
  const { id, title, description, date, organizer } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper
        component="article"
        elevation={3}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          transition: "background-color 0.2s ease-in-out",

          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
          {title}
        </Typography>

        <Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>

        <Typography variant="body1" component="span">
          {date}
        </Typography>

        <Typography variant="body1" component="span">
          {organizer}
        </Typography>

        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="text">
            <Link href={`${PUBLIC_ROUTES.REGISTER}/${id}`}>Register</Link>
          </Button>

          <Button variant="text">
            <Link href={`${PUBLIC_ROUTES.PARTICIPANTS}/${id}`}>View</Link>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};
