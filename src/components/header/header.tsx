import Link from "next/link";

import { Button, Container } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const Header = (): JSX.Element => {
  return (
    <Container
      sx={{
        display: "flex",
        paddingBlock: "1rem",
        gap: "1rem",
        justifyContent: "end",
        position: "relative",
        zIndex: 1,
      }}
      component="header"
    >
      <Button variant="contained" size="large">
        <Link href={PUBLIC_ROUTES.EVENTS}>Look at events</Link>
      </Button>

      <Button variant="contained" color="secondary" size="large">
        <Link href={PUBLIC_ROUTES.CREATE}>Create new event</Link>
      </Button>
    </Container>
  );
};
