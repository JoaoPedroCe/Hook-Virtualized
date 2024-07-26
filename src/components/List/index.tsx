import React from "react";
import useVirtualized from "../../hooks/useVirtualized";

interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  height: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function VirtualizedList<T>({
  items,
  itemHeight,
  height,
  renderItem,
}: VirtualizedListProps<T>) {
  const { containerRef, totalHeight, visibleItems, startIndex } =
    useVirtualized({ items, itemHeight, containerHeight: height });

  return (
    <div className="container" ref={containerRef} style={{ height }}>
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            className="item"
            style={{
              position: "absolute",
              top: (startIndex + index) * itemHeight,
              height: itemHeight,
              width: "100%",
            }}
          >
            {renderItem(item, startIndex + index)}
          </div>
        ))}
      </div>
    </div>
  );
}
