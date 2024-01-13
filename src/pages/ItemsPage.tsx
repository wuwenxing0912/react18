import styled from "styled-components";
import { AddItemFloatButton } from "../components/AddItemFloatButton";
import { TimeRangePicker, selected } from "../components/TimeRangePicker";
import { Topnav } from "../components/Topnav";
import { ItemsList } from "./ItemsPage/ItemsList";
import { ItemsSummary } from "./ItemsPage/ItemsSummary";
import { useState } from "react";

const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(143, 76, 215, 1) 0%,
    rgba(92, 51, 190, 1) 100%
  );
`;

export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<selected>("thisMonth");
  return (
    <div>
      <Div>
        <Topnav />
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
      </Div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  );
};
