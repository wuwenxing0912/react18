import { ReactNode } from "react";

interface Props {
  title?: string;
  icon: ReactNode;
}
export const TopNav: React.FC<Props> = ({ title = "山竹记账", icon }) => {
  return (
    <div text-white flex items-center pt-24px pb-8px px-24px>
      <span className="w-24px h-24px mr-16px" flex justify-center items-center>
        {icon}
      </span>
      <h1 text-24px>{title}</h1>
    </div>
  );
};
