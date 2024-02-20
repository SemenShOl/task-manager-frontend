import { OverlayScrollbars } from "overlayscrollbars";
import { MutableRefObject, RefObject, useEffect } from "react";

export const useOverlayScrollBar = (root: any, hasScroll: boolean) => {
  useEffect(() => {
    let scrollBars: OverlayScrollbars;

    if (root?.current) {
      scrollBars = OverlayScrollbars(root.current, {
        scrollbars: {
          theme: "os-theme-custom",
        },
      });
    }

    return () => {
      if (scrollBars) {
        scrollBars.destroy();
      }
    };
  }, [root, hasScroll]);
};
