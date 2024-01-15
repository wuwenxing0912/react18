import styled from "styled-components";
import { Icon } from "../Icon";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

const MyIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

const items = [
  { key: "chart", icon: "chart", text: "统计图表", to: "/chart" },
  { key: "export", icon: "export", text: "导出数据", to: "/export" },
  { key: "category", icon: "category", text: "自定义分类", to: "/category" },
  { key: "noty", icon: "noty", text: "记账提醒", to: "/noty" },
];
export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <ul className={className} bg-white text-20px py-16px>
      {items.map((item) => (
        <li
          children-flex
          children-items-center
          children-px-16px
          children-py-8px
          children-mb-4px
        >
          <NavLink key={item.key} to={item.to}>
            <MyIcon name={item.icon} />
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
