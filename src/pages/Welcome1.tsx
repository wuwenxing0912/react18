import * as React from "react";
import style from "./Welcome1.module.scss";
import classNames from "classnames";

export const Welcome1: React.FC = () => {
  //[style.wrapper,style.wrapper_text_color,"test_no_random",].join(" ")
  return (
    <div>
      <div
        className={classNames(
          style.wrapper,
          style.wrapper_text_color,
          "test_no_random"
        )}
      >
        下一页 scss写法
      </div>
    </div>
  );
};
