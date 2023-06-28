import NewList from "./NewList";
import Recommend from "./Recommend";

export default function About() {
  return (
    <div className="pt-14 pb-16 flex flex-col gap-14 max-w-[960px] m-auto overflow-auto">
      <Recommend />
      <NewList />
    </div>
  );
}
