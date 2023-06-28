import BodyGraph from "../../components/BodyGraph";
import Achivement from "../../components/Achivement";
import { ReactComponent as Morining } from "../../assets/morning.svg";
import { ReactComponent as Lunch } from "../../assets/lunch.svg";
import { ReactComponent as Dinner } from "../../assets/dinner.svg";
import { ReactComponent as Snack } from "../../assets/snack.svg";
import ImageList from "../../components/ImageList";
import useSWR from 'swr';
import { fetchHealths } from "../../apis/myRecord";

const navs = [
  {
    key: 1,
    item: <Morining />,
  },
  {
    key: 2,
    item: <Lunch />,
  },
  {
    key: 3,
    item: <Dinner />,
  },
  {
    key: 4,
    item: <Snack />,
  },
];

export default function Home() {
  const { data } = useSWR('getHealths', fetchHealths);
  return (
    <>
      <div className="grid grid-cols-10 h-[30vh] w-full mb-28">
        <div className="h-[40vh] col-span-4">
          <Achivement date={data?.data.primaryDate || ""} percent={Number(data?.data.percent)} />
        </div>
        <div className="h-[40vh] w-full col-span-6">
          <BodyGraph />
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-12 mt-4">
          {navs.map((nav) => nav.item)}
        </div>
        <div className="grid grid-cols-4 overflow-y-auto list-none gap-3 px-[calc((100%-960px)/2)] mt-8">
          <ImageList />
        </div>
      </div>
    </>
  );
}
