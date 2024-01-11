import { useEffect } from "react";

export const useTitle = (title?: string) => {
  if (title === undefined || title === null) return;
  useEffect(() => {
    document.title = title;
  });
};
