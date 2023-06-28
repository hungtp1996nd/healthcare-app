export type CardProps = {
  title: string;
  content: string;
  image: string;
};

export default function EntryList() {
  const cards: CardProps[] = [
    {
      title: "Body Record",
      content: "自分のカラダの記録",
      image: "/images/myRecords/bodyRecord.jpg",
    },
    {
      title: "My Exercise",
      content: "自分の運動の記録",
      image: "/images/myRecords/myExercise.jpg",
    },
    {
      title: "My Diary",
      content: "自分の日記",
      image: "/images/myRecords/myDiary.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-between items-center">
      {cards.map((card) => (
        <div className="bg-primary-300 p-6 w-[288px] h-[288px] relative">
          <div
            className="w-full h-full bg-no-repeat bg-cover grayscale"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute top-0 left-0 opacity-[0.4] w-full h-full" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full p-6 z-[1] flex flex-col gap-[10px] items-center justify-center">
            <span className="text-primary-300 font-inter font-normal text-[25px] uppercase">
              {card.title}
            </span>
            <div className="w-full px-10">
              <div className="h-6 bg-primary-400 px-2 text-sm text-center font-light flex items-center justify-center">
                <span>{card.content}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
