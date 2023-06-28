const recommendList = [
  {
    title: "RECOMMENDED COLUMN",
    content: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    content: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    content: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    content: "健康",
  },
];

export default function Recommend() {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {recommendList.map((recommended) => (
        <div className="w-[216px] h-36 bg-dark-600 px-2 pt-6 pb-[22px] flex flex-col items-center gap-2 cursor-pointer">
          <span className="table-cell text-center text-primary-300 uppercase text-[22px] font-inter font-normal">
            {recommended.title}
          </span>
          <div className="w-14 border-t" />
          <span className="w-full text-center text-lg font-light text-white">
            {recommended.content}
          </span>
        </div>
      ))}
    </div>
  );
}
