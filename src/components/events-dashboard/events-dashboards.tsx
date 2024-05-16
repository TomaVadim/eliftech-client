"use client";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";

import { EventProps } from "@/shared/interfaces/event";
import { EventCard } from "@/components/event-card/event-card";
import { useInfinityLoadEvents } from "@/hooks/use-infinity-load-events/use-infinity-load-events";
import { SelectWithSortOptions } from "@/components/select-with-sort-options/select-with-sort-options";

interface Props {
  list: EventProps[];
}

export const EventsDashboards = ({ list }: Props): JSX.Element => {
  const { currentList, isLoading, loadMoreEvents } =
    useInfinityLoadEvents(list);

  return (
    <Box>
      <Grid container sx={{ marginBlock: "1rem" }}>
        <Grid
          item
          xs={8}
          lg={10}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography variant="h5">Sort events by:</Typography>
        </Grid>
        <Grid item xs={4} lg={2}>
          <SelectWithSortOptions />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {currentList.map(({ id, ...props }: EventProps) => (
          <EventCard key={id} id={id} {...props} />
        ))}

        {isLoading && <CircularProgress sx={{ margin: "1rem auto" }} />}

        <InView
          className="w-full h-5 mx-auto"
          as="div"
          threshold={1}
          onChange={loadMoreEvents}
        ></InView>
      </Grid>
    </Box>
  );
};
