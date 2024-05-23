"use client";
import { useState } from "react";

import { Box, Grid, SelectChangeEvent, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import toast, { Toaster } from "react-hot-toast";

import { EventCard } from "@/components/event-card/event-card";
import { SelectWithSortOptions } from "@/components/select-with-sort-options/select-with-sort-options";
import useInfiniteLoadEvents from "@/api/hooks/use-infinity-load-events";
import { useSortEvents } from "@/hooks/use-sort-events";

export const EventsDashboards = (): JSX.Element => {
  const [sortBy, setSortBy] = useState("default");
  const { events, error, loadMoreEvents } = useInfiniteLoadEvents();
  const { sortedEvents } = useSortEvents(events, sortBy);

  if (error) {
    toast.error("Something went wrong", { id: "events" });
  }

  const handleChangeSortMethod = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value);
  };

  return (
    <Box>
      <Toaster
        position="top-center"
        toastOptions={{
          id: "events",
        }}
        reverseOrder={false}
      />
      <Grid container sx={{ marginBlock: "2rem" }}>
        <Grid
          item
          xs={8}
          lg={10}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography variant="h5">Sort events by:</Typography>
        </Grid>
        <Grid item xs={4} lg={2}>
          <SelectWithSortOptions
            sortBy={sortBy}
            onChange={handleChangeSortMethod}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {sortedEvents.length === 0 && (
          <Grid item xs={12}>
            <Typography
              sx={{ marginTop: "3rem", textAlign: "center" }}
              variant="h5"
            >
              No events yet
            </Typography>
          </Grid>
        )}

        {sortedEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </Grid>
      <InView className="w-full h-5" as="div" onChange={loadMoreEvents} />
    </Box>
  );
};
