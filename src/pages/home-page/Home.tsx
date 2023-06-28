import BodyGraph from "../../components/BodyGraph";
import Achivement from "../../components/Achivement";
import ImageList from "../../components/ImageList";
import useSWR from "swr";
import { fetchHealths } from "../../apis/myRecord";

export default function Home() {
  const { data } = useSWR("getHealths", fetchHealths);
  return (
    <>
      <div className="grid grid-cols-10 h-[30vh] w-full mb-28">
        <div className="h-[40vh] col-span-4">
          <Achivement
            date={data?.data.primaryDate || ""}
            percent={Number(data?.data.percent)}
          />
        </div>
        <div className="h-[40vh] w-full col-span-6">
          <BodyGraph />
        </div>
      </div>
      <ImageList />
    </>
  );
}
