import { fetchDaries } from "../../apis/myRecord";
import { format } from "date-fns";
import useSWR from 'swr'

export default function Diary() {
  const {data: diaries} = useSWR('getDaries', fetchDaries)
  return (
    <div className="flex flex-col">
      <span className="leading-[27px] font-inter font-normal text-[22px] text-dark-500 uppercase">
        My Diary
      </span>
      <div className="grid justify-between diary-body">
        {diaries?.data.map((diary) => (
          <div className="w-[231px] h-[231px] p-4 border-[2px] border-[#707070] flex flex-col gap-2 text-dark-500 cursor-pointer">
          <div className="font-inter font-normal text-lg leading-[22px] flex flex-col">
            <span>{format(Number(diary.createdAt), 'yyyy.MM.dd')}</span>
            <span>{format(Number(diary.createdAt), 'hh:mm')}</span>
          </div>
          <span className="text-xs font-light tracking-[0.06px] whitespace-pre-line">
            {diary.content}
          </span>
        </div>
        ))}
      </div>
      {/* <SeeMoreButton
        style={{ marginTop: '30px' }}
        title={t('myRecord.myDiary.seeMoreDiaries')}
      /> */}
    </div>
  );
}
