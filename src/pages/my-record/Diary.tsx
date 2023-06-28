import { format } from "date-fns";

const diaries = [
    {
      id: '1',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '2',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '3',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '4',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '5',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '6',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '7',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '8',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '9',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '10',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '11',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      id: '12',
      createdAt: new Date(),
      content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
]

export default function Diary() {
  return (
    <div className="flex flex-col">
      <span className="leading-[27px] font-inter font-normal text-[22px] text-dark-500 uppercase">
        My Diary
      </span>
      <div className="grid justify-between diary-body">
        {diaries.map((diary) => (
          <div className="w-[231px] h-[231px] p-4 border-[2px] border-[#707070] flex flex-col gap-2 text-dark-500 cursor-pointer">
          <div className="font-inter font-normal text-lg leading-[22px] flex flex-col">
            <span>{format(diary.createdAt, 'yyyy.MM.dd')}</span>
            <span>{format(diary.createdAt, 'hh:mm')}</span>
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
