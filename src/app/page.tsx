import Link from "next/link";

import { Box, Button, Container, Typography } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export default function Home() {
  return (
    <Container
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography variant="h1" component="h1">
          Events
        </Typography>

        <Button variant="contained" size="large">
          <Link href={PUBLIC_ROUTES.EVENTS}>Look at events</Link>
        </Button>
      </Box>
    </Container>
  );
}
