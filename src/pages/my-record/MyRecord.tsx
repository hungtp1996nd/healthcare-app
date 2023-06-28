import BodyGraph from "../../components/BodyGraph";
import Diary from "./Diary";
import EntryList from "./EntryList";
import Exercise from "./Excercise";

export default function MyRecord() {
    return (
        <div className="px-40 py-14 flex flex-col gap-14">
            <EntryList />
            <BodyGraph title="BODY RECORD 2021.05.21" />
            <Exercise />
            <Diary />
        </div>
    )
}