import VirtualizedList from "./components/List";

const items = Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`);

export default function App() {
  return (
    <VirtualizedList
      items={items}
      itemHeight={50}
      height={900}
      renderItem={(item) => <div>{item}</div>}
    />
    // <>
    //   {items.map((value) => (
    //     <div>{value}</div>
    //   ))}
    // </>
  );
}
