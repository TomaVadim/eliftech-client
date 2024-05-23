import Link from "next/link";

import { Box, Button, Container } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const Header = (): JSX.Element => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        top: "1rem",
        left: 0,
        right: 0,
        borderRadius: "20px",
        display: "flex",
        backdropFilter: "blur(4px)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "1rem",
        justifyContent: "end",
        position: "fixed",
        zIndex: 1,
      }}
      component="header"
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Button variant="contained" size="small">
          <Link href={PUBLIC_ROUTES.EVENTS}>Look at events</Link>
        </Button>

        <Button variant="contained" color="secondary" size="small">
          <Link href={PUBLIC_ROUTES.CREATE}>Create new event</Link>
        </Button>
      </Box>
    </Container>
  );
};
