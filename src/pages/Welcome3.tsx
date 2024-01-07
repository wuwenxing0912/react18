import * as React from "react";

export const Welcome3: React.FC = () => {
  return (
    <div flex>
      <header b-1 b-red h-100px>
        header
      </header>
      <main b-1 b-blue h-100px grow-1>
        main
      </main>
      <footer b-1 b-black h-100px>
        footer
      </footer>
    </div>
  );
};
