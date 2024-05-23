import { useState, useEffect } from "react";

import { EventResponse } from "@/schemas/event-response/event-response";

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
          sortedArray.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateA - dateB;
          });
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
