import s from "./TimeRangePicker.module.scss";

export type selected = "thisMonth" | "custom" | "thisYear" | "lastMonth";
interface Props {
  selected: selected;
  onSelected: (selected: selected) => void;
}
const timeRanges: { key: selected; text: string }[] = [
  { key: "thisMonth", text: "本月" },
  { key: "lastMonth", text: "上月" },
  { key: "thisYear", text: "今年" },
  { key: "custom", text: "自定义时间" },
];

export const TimeRangePicker: React.FC<Props> = ({ selected, onSelected }) => {
  return (
    <div>
      <ol flex items-center pt-16px text-white text-16px children-px-16px>
        {timeRanges.map((tr) => (
          <li
            key={tr.key}
            cursor-pointer
            p-16px
            className={selected === tr.key ? s.selected : ""}
            onClick={() => onSelected(tr.key)}
          >
            {tr?.text}
          </li>
        ))}
      </ol>{" "}
    </div>
  );
};
