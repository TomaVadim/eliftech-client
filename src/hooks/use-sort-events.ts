import { EventResponse } from "@/schemas/event-response/event-response";
import { useState, useEffect } from "react";

export const useSortEvents = (events: EventResponse[], sortBy: string) => {
  const [sortedEvents, setSortedEvents] = useState<EventResponse[]>([]);

  useEffect(() => {
    const sortEvents = () => {
      let sortedArray = [...events];
      switch (sortBy) {
        case "title":
          sortedArray.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "date":
          sortedArray.sort((a, b) => Number(a.date) - Number(b.date));
          break;
        case "organizer":
          sortedArray.sort((a, b) => a.organizer.localeCompare(b.organizer));
          break;
        default:
          break;
      }
      setSortedEvents(sortedArray);
    };

    sortEvents();
  }, [events, sortBy]);

  return { sortedEvents };
};
