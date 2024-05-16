import { useState } from "react";

import { EventProps } from "@/shared/interfaces/event";

export const useInfinityLoadEvents = (list: EventProps[]) => {
  const amountLoadEvents = 3;
  const initialListLength = 9;
  const initialList = list.slice(0, initialListLength);

  const [isLoading, setIsLoading] = useState(false);
  const [currentList, setCurrentList] = useState<EventProps[]>(initialList);

  const loadMoreEvents = () => {
    setIsLoading(true);
    if (currentList.length >= list.length) {
      setIsLoading(false);
      return;
    }

    setCurrentList([
      ...currentList,
      ...list.slice(currentList.length, currentList.length + amountLoadEvents),
    ]);

    setIsLoading(false);
  };

  return {
    isLoading,
    currentList,
    loadMoreEvents,
  };
};
