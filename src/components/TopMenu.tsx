import { animated, useSpring } from "@react-spring/web";
import { CurrentUser } from "./TopMenu/CurrentUser";
import { Menu } from "./TopMenu/Menu";
import { useState } from "react";

interface Props {
  onClickMask?: () => void;
  visible?: boolean;
}

export const TopMenu: React.FC<Props> = ({ onClickMask, visible }) => {
  const [maskVisible, setMaskVisible] = useState(false);
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 3000 },
  });
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 3000 },
    onStart: ({ value }) => {
      if (value.opacity < 0.1) {
        setMaskVisible(true);
      }
    },
    onRest: ({ value }) => {
      if (value.opacity < 0.1) {
        setMaskVisible(false);
      }
    },
  });
  const newMaskStyle = {
    ...maskStyles,
    visibility: (maskVisible ? "visible" : "hidden") as "visible" | "hidden",
  };
  return (
    <>
      <animated.div
        fixed
        top-0
        left-0
        w="100%"
        h="100%"
        bg="[rgba(0,0,0,0.75)]"
        z="[calc(var(--z-menu)-1)]"
        onClick={onClickMask}
        style={newMaskStyle}
      />
      <animated.div
        fixed
        top-0
        left-0
        w-70vw
        h-screen
        flex
        flex-col
        bg-white
        z="[var(--z-menu)]"
        style={menuStyles}
      >
        <CurrentUser grow-0 shrink-0 />
        <Menu grow-1 shrink-1 />
      </animated.div>
    </>
  );
};
