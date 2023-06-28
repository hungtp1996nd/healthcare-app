import { format } from "date-fns";

const newsList = [
  {
    id: "1",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column1.jpg",
  },
  {
    id: "2",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column2.jpg",
  },
  {
    id: "3",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column3.jpg",
  },
  {
    id: "4",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column4.jpg",
  },
  {
    id: "5",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column5.jpg",
  },
  {
    id: "6",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column6.jpg",
  },
  {
    id: "7",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column7.jpg",
  },
  {
    id: "8",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column8.jpg",
  },
  {
    id: "9",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column1.jpg",
  },
  {
    id: "10",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column2.jpg",
  },
  {
    id: "11",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column3.jpg",
  },
  {
    id: "12",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column4.jpg",
  },
  {
    id: "13",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column5.jpg",
  },
  {
    id: "14",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column6.jpg",
  },
  {
    id: "15",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column7.jpg",
  },
  {
    id: "16",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column8.jpg",
  },
  {
    id: "17",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column1.jpg",
  },
  {
    id: "18",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column2.jpg",
  },
  {
    id: "19",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column3.jpg",
  },
  {
    id: "20",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column4.jpg",
  },
  {
    id: "21",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column5.jpg",
  },
  {
    id: "22",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column6.jpg",
  },
  {
    id: "23",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column7.jpg",
  },
  {
    id: "24",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column8.jpg",
  },
  {
    id: "25",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column1.jpg",
  },
  {
    id: "26",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column2.jpg",
  },
  {
    id: "27",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column3.jpg",
  },
  {
    id: "28",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column4.jpg",
  },
  {
    id: "29",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column5.jpg",
  },
  {
    id: "30",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column6.jpg",
  },
  {
    id: "31",
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    title: "#魚料理  #和食  #DHA",
    createdAt: new Date(),
    image: "/images/column/column7.jpg",
  },
];

export default function NewList() {
  return (
    <div className="grid items-center new-list">
      {newsList.map((news) => (
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
