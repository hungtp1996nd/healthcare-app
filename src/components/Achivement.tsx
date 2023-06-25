
type AchivementProps = {
  percent: number;
  date: string;
};

export default function Achivement({ percent, date }: AchivementProps) {
  return (
    <div className="w-[40vh] h-[40vh] bg-cover bg-no-repeat bg-center flex items-center justify-center" style={{backgroundImage: `url('/main_photo.png')`}}>
    <div
      className="radial-progress flex justify-center items-center gap-2 shadow shadow-circle text-white"
      style={
        {
          "--value": `${percent}`,
          "--size": "12rem",
          "--thickness": "4px",
        } as React.CSSProperties
      }
    >
      <span className="text-white text-lg">{date}</span>{" "}
      <span className="text-white text-2xl">{`${percent}%`}</span>
    </div>
    </div>
  );
}
