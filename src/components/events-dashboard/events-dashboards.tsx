"use client";

import { useState } from "react";

import { CircularProgress, Grid } from "@mui/material";
import { InView } from "react-intersection-observer";

import { EventProps } from "@/shared/enums/routes/interfaces/event";
import { EventCard } from "@/components/event-card/event-card";

interface Props {
  list: EventProps[];
}

export const EventsDashboards = ({ list }: Props): JSX.Element => {
  const initialList = list.slice(0, 3);
  const delay = 5000;

  const [isLoading, setIsLoading] = useState(false);
  const [currentList, setCurrentList] = useState<EventProps[]>(initialList);

  const loadMoreEvents = () => {
    setIsLoading(true);
    if (currentList.length >= list.length) {
      setTimeout(() => setIsLoading(false), delay);
      return;
    }

    setCurrentList([
      ...currentList,
      ...list.slice(currentList.length, currentList.length + 3),
    ]);

    setTimeout(() => setIsLoading(false), delay);
  };

  return (
    <Grid container spacing={2}>
      {currentList.map(({ id, ...props }: EventProps) => (
        <EventCard key={id} id={id} {...props} />
      ))}

      {isLoading && <CircularProgress sx={{ margin: "1rem auto" }} />}

      <InView
        className="w-full"
        as="div"
        onChange={(inView, entry) => loadMoreEvents()}
      >
        <h2 className="w-full text-center bg-red-500">
          Plain children are always rendered. Use onChange to monitor state.
        </h2>
      </InView>
    </Grid>
  );
};
