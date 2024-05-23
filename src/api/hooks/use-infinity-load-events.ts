import { useState, useEffect, useCallback } from "react";

import { fetcher } from "@/api/fetcher";
import {
  EventResponse,
  EventResponseSchema,
} from "@/schemas/event-response/event-response";
import { isAxiosError } from "axios";

const useInfiniteLoadEvents = (initialPage = 1, limit = 10) => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!hasMore) return;

    try {
      const response = await fetcher.get("/events/paginate", {
        params: { page, limit },
      });
      const newEvents = response.data.events;

      const validatedEvents = EventResponseSchema.array().parse(newEvents);

      setEvents((prevEvents) => {
        const existingEventIds = prevEvents.map((event) => event.id);

        const filteredNewEvents = validatedEvents.filter(
          (event) => !existingEventIds.includes(event.id)
        );

        return [...prevEvents, ...filteredNewEvents];
      });

      setHasMore(validatedEvents.length > 0);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        return error.message;
      }
      if (isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.response?.data.message;
      }
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

  return { events, error, hasMore, loadMoreEvents };
};

export default useInfiniteLoadEvents;
