import { fetchNewList } from "../../apis/myRecord";
import { format } from "date-fns";
import useSWR from "swr";

export default function NewList() {
  const { data: newsList } = useSWR("getNewList", fetchNewList);
  return (
    <div className="grid items-center new-list">
      {newsList?.data.map((news) => (
        <div className="flex flex-col cursor-pointer">
          <div
            className="bg-cover bg-no-repeat relative w-[234px] h-[144px]"
            style={{ backgroundImage: `url(${news.image})` }}
          >
            <div className="absolute bottom-0 left-0 bg-primary-300 h-6 w-36 text-light px-2 flex justify-between text-[15px] font-inter font-normal">
              <span>{format(news.createdAt, "yyyy.MM.dd")}</span>
              <span>{format(news.createdAt, "hh:mm")}</span>
            </div>
          </div>
          <span className="text-dark-500 text-[15px] font-light leading-[22px] mt-2 tracking-[0.075px]">
            {news.content}
          </span>
          <span className="text-primary-400 font-light text-xs">
            {news.title}
          </span>
        </div>
      ))}
    </div>
  );
}
