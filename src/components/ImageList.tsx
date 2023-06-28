import { fetchMeals } from "../apis/myRecord";
import useSWR from "swr";

export default function ImageList() {
  const { data: meals } = useSWR("getMeals", fetchMeals);
  return (
    <>
      {meals &&
        meals?.data.map((img) => (
          <div className="w-[240px]" key={img.title}>
            <div className="relative">
              <img
                src={img.img}
                alt={img.title}
                loading="lazy"
                className="h-[240px]"
              />
              <div className="absolute bottom-0 left-0 w-[105px] h-[20px] bg-[#FFCC21] flex items-center p-2 text-white text-xs">
                {img.date}.{img.category}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
