import { fetchExercise } from "../../apis/myRecord";
import useSWR from "swr";

export default function Exercise() {
  const { data: exercies } = useSWR("getExercise", fetchExercise);

  const formatMinute = (minutes: number) => {
    const hours = Math.floor(minutes / 60);

    const remainingMinutes = minutes % 60;

    return `${hours ? `${hours} h` : ""}${
      remainingMinutes ? ` ${remainingMinutes} min` : ""
    }`;
  };

  return (
    <div className="h-[264px] bg-dark-500 px-6 py-4 flex flex-col gap-2">
      <div className="flex text-white font-inter font-normal">
        <span className="w-24 text-[15px] leading-[18px] uppercase whitespace-pre-line">
          My Excercise
        </span>
        <span className="text-[22px] leading-[27px]">2021.05.21</span>
      </div>
      <div className="flex flex-wrap overflow-x-hidden h-48 excercise-thumb">
        {exercies?.data.map((exercise) => (
          <div className="border-b-[1px] border-gray-400 pb-[2px] pr-2 min-w-[416px] flex gap-[3px]">
            <span className="text-[5px] w-[13px] text-white pt-1">●</span>
            <div className="flex flex-col text-[15px]">
              <span className="text-white leading-[22px]">
                {exercise.title}
              </span>
              <span className="font-inter font-normal leading-[18px] text-primary-300">
                {exercise.numberOfKcal}kcal
              </span>
            </div>
            <span className="flex-1 flex justify-end font-inter font-normal text-lg leading-[18px] text-primary-300">
              {formatMinute(exercise.durationInMinutes)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
