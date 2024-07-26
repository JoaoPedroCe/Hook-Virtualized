import { useState, useRef, useEffect, useCallback, RefObject } from "react";

interface UseVirtualizedProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
}

interface UseVirtualizedReturn<T> {
  containerRef: RefObject<HTMLDivElement>;
  totalHeight: number;
  visibleItems: T[];
  startIndex: number;
  itemHeight: number;
}

export default function useVirtualized<T>({
  items,
  itemHeight,
  containerHeight,
}: UseVirtualizedProps<T>): UseVirtualizedReturn<T> {
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollOffset(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const visibleItemCount = Math.ceil(containerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;

  const startIndex = Math.max(
    0,
    Math.floor(scrollOffset / itemHeight) - visibleItemCount
  );
  const endIndex = Math.min(
    items.length,
    Math.ceil((scrollOffset + containerHeight) / itemHeight) + visibleItemCount
  );

  const visibleItems = items.slice(startIndex, endIndex);

  return {
    containerRef,
    totalHeight,
    visibleItems,
    startIndex,
    itemHeight,
  };
}
