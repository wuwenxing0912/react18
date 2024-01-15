import { CurrentUser } from "./TopMenu/CurrentUser";
import { Menu } from "./TopMenu/Menu";

interface Props {
  onClickMask?: () => void;
}

export const TopMenu: React.FC<Props> = ({ onClickMask }) => {
  return (
    <>
      <div
        fixed
        top-0
        left-0
        w="100%"
        h="100%"
        bg="[rgba(0,0,0,0.75)]"
        z="[calc(var(--z-menu)-1)]"
        onClick={onClickMask}
      />
      <div
        fixed
        top-0
        left-0
        b-1
        b-red
        w-70vw
        h-screen
        flex
        flex-col
        bg-white
        z="[var(--z-menu)]"
      >
        <CurrentUser grow-0 shrink-0 />
        <Menu grow-1 shrink-1 />
      </div>
    </>
  );
};
