import { Icon } from "./Icon";
interface Props {
  title?: string;
}
export const Topnav: React.FC<Props> = ({ title = "山竹记账" }) => {
  return (
    <div flex items-center p-16px text-white>
      <Icon name="menu" className="h-24px w-24px mr-16px" />
      <h1 text-24px>{title}</h1>
    </div>
  );
};
