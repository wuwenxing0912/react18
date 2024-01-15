import { CurrentUser } from "./TopMenu/CurrentUser";
import { Menu } from "./TopMenu/Menu";

export const TopMenu: React.FC = () => {
  return (
    <div fixed top-0 left-0 b-1 b-red w-70vw h-screen flex flex-col bg-white>
      <CurrentUser grow-0 shrink-0 />
      <Menu grow-1 shrink-1 />
    </div>
  );
};
