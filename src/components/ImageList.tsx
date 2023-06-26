import m01 from "../assets/images/m01.jpg";
import m02 from "../assets/images/m02.jpg";
import m03 from "../assets/images/m03.jpg";
import l01 from "../assets/images/l01.jpg";
import l02 from "../assets/images/l02.jpg";
import l03 from "../assets/images/l03.jpg";
import d01 from "../assets/images/d01.jpg";
import d02 from "../assets/images/d02.jpg";
import s01 from "../assets/images/s01.jpg";

const images = [
  {
    title: "Morning 1",
    img: m01,
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Morning 2",
    img: m02,
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Morning 3",
    img: m03,
    date: "05.21",
    category: "Morning",
  },
  {
    title: "Lunch 1",
    img: l01,
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Lunch 2",
    img: l02,
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Lunch 3",
    img: l03,
    date: "05.21",
    category: "Lunch",
  },
  {
    title: "Dinner 1",
    img: d01,
    date: "05.21",
    category: "Dinner",
  },
  {
    title: "Dinner 2",
    img: d02,
    date: "05.21",
    category: "Dinner",
  },
  {
    title: "Snack 1",
    img: s01,
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
