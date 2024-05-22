import { useState, useEffect, useCallback } from "react";

import { fetcher } from "@/api/fetcher";
import {
  EventResponse,
  EventResponseSchema,
} from "@/schemas/event-response/event-response";

const useInfiniteLoadEvents = (initialPage = 1, limit = 10) => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = useCallback(async () => {
    if (!hasMore) return;

    try {
      const response = await fetcher.get("/events/paginate", {
        params: { page, limit },
      });
      const newEvents = response.data.events;

      const validatedEvents = EventResponseSchema.array().parse(newEvents);

      setEvents((prevEvents) => {
        const newEventIds = validatedEvents.map((event) => event.id);
        const existingEventIds = prevEvents.map((event) => event.id);

        const filteredNewEvents = validatedEvents.filter(
          (event) => !existingEventIds.includes(event.id)
        );

        return [...prevEvents, ...filteredNewEvents].reverse();
      });

      setHasMore(validatedEvents.length > 0);
    } catch (error) {
      console.error("Failed to load events", error);
    } finally {
    }
  }, [page, limit, hasMore]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const loadMoreEvents = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { events, hasMore, loadMoreEvents };
};

export default useInfiniteLoadEvents;
