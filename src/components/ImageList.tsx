import { fetchMeals } from "../apis/myRecord";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { ReactComponent as Morining } from "../assets/morning.svg";
import { ReactComponent as Lunch } from "../assets/lunch.svg";
import { ReactComponent as Dinner } from "../assets/dinner.svg";
import { ReactComponent as Snack } from "../assets/snack.svg";
import SeeMoreButton from "./SeeMoreButton";

const navs = [
  {
    key: 1,
    item: <Morining />,
    type: "Morning",
  },
  {
    key: 2,
    item: <Lunch />,
    type: "Lunch",
  },
  {
    key: 3,
    item: <Dinner />,
    type: "Dinner",
  },
  {
    key: 4,
    item: <Snack />,
    type: "Snack",
  },
];

export default function ImageList() {
  const [typeMeal, setTypeMeal] = useState<string | null>(null);
  const [size, setSize] = useState(8);
  const { data: meals, mutate: refetchMeals } = useSWR("getMeals", () =>
    fetchMeals(size, typeMeal)
  );

  useEffect(() => {
    refetchMeals();
  }, [typeMeal, refetchMeals, size]);

  return (
    <>
      <div>
        <div className="flex justify-center gap-12 mt-4">
          {navs.map((nav) => (
            <div
              className="cursor-pointer"
              onClick={() => setTypeMeal(nav.type)}
            >
              {nav.item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 overflow-y-auto list-none gap-3 px-[calc((100%-960px)/2)] mt-8">
          {meals &&
            meals?.data?.map((img) => (
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
        </div>
      </div>
      <div className="pt-8 pb-14 flex justify-center">
        <SeeMoreButton
          title="記録をもっと見る"
          onClick={() => setSize((prev) => prev + 8)}
        />
      </div>
    </>
  );
}
