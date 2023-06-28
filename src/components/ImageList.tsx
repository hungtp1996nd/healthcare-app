const images = [
  {
    title: "Morning 1",
    img: "/images/topPage/deal6.jpg",
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Morning 2",
    img: '/images/topPage/deal7.jpg',
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Morning 3",
    img: "/images/topPage/deal8.jpg",
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Lunch 1",
    img: "/images/topPage/deal3.jpg",
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Lunch 2",
    img: "/images/topPage/deal4.jpg",
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Lunch 3",
    img: "/images/topPage/deal5.jpg",
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Dinner 1",
    img: "/images/topPage/deal1.jpg",
    date: "05.21",
    category: "Dinner",
  },
  {
    title: "Dinner 2",
    img: "/images/topPage/deal2.jpg",
    date: "05.21",
    category: "Dinner",
  },
  {
    title: "Snack 1",
    img: "/images/topPage/deal9.jpg",
    date: "05.21",
    category: "Snack",
  },
];

export default function ImageList() {
  return (
    <>
      {images.map((img) => (
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
