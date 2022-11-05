import React, { useCallback, useEffect, useRef } from "react";
import { gsap, Expo, Power3 } from "gsap";

interface Position {
  x?: number;
  y?: number;
}

interface Velocity {
  x?: number;
  y?: number;
}

export const Cursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement | null>(null);

  const pos: Position = useInstance(() => ({ x: 0, y: 0 }));
  const vel: Velocity = useInstance(() => ({ x: 0, y: 0 }));
  const set: any = useInstance();

  useEffect(() => {
    set.x = gsap.quickSetter(cursor.current, "x", "px");
    set.y = gsap.quickSetter(cursor.current, "y", "px");

    set.rotation = gsap.quickSetter(cursor.current, "rotate", "deg");
    set.scaleX = gsap.quickSetter(cursor.current, "scaleX");
    set.scaleY = gsap.quickSetter(cursor.current, "scaleY");
    set.width = gsap.quickSetter(cursor.current, "width", "px");
  });

  const persist = useCallback(() => {
    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);

    set.x(pos.x);
    set.y(pos.y);

    if (scale && rotation && cursor.current) {
      set.width(cursor.current?.style.height + scale * 50);
      set.rotation(rotation);
      set.scaleX(1 + scale);
      set.scaleY(1 - scale);
    }
  }, [pos.x, pos.y, set, vel.x, vel.y]);

  useEffect(() => {
    const sizeChangingTargets = document.querySelectorAll(
      "[data-cursor-size]"
    ) as unknown as NodeListOf<HTMLElement>;
    const stickyTargets = document.querySelectorAll(
      "[data-cursor-stick]"
    ) as unknown as NodeListOf<HTMLElement>;
    let onOverElement = false;

    const setFromEvent = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      let target: Element | null;
      let x = event.clientX;
      let y = event.clientY;
      let duration = 1;
      let ease = Expo.easeOut;
      let boundingRect: DOMRect | undefined;

      if (onOverElement) {
        target = targetElement.querySelector(
          targetElement.dataset["cursorStick"] as string
        );
        boundingRect = target?.getBoundingClientRect();
        if (target && boundingRect) {
          x =
            boundingRect.left +
            target.clientWidth / 2 -
            (boundingRect.left + target.clientWidth / 2 - event.clientX) * 0.1;
          y =
            boundingRect.top +
            target.clientHeight / 2 -
            (boundingRect.top + target.clientHeight / 2 - event.clientY) * 0.1;
          duration = 0.7;
          ease = Power3.easeOut;
        }
      }

      gsap.set(pos, {});

      const toX = gsap.quickTo(pos, "x", {
        duration,
        ease,
        onUpdate: () => {
          if (pos.x) vel.x = x - pos.x;
        },
      });

      const toY = gsap.quickTo(pos, "y", {
        duration,
        ease,
        onUpdate: () => {
          if (pos.y) vel.y = y - pos.y;
        },
      });

      toX(x);
      toY(y);

      persist();
    };

    window.addEventListener("mousemove", (e) => {
      setFromEvent(e);
    });

    document.body.addEventListener("mouseenter", (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && cursor.current) {
        gsap.to(".cursor-custom", {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
      }
    });

    document.body.addEventListener("mouseleave", (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && cursor.current) {
        gsap.to(".cursor-custom", {
          opacity: 0,
          duration: 1,
          ease: Expo.easeOut,
        });
      }
    });

    sizeChangingTargets.forEach((element) => {
      element.addEventListener("mouseenter", (event: MouseEvent) => {
        if (event.target instanceof HTMLElement && cursor.current) {
          gsap.to(".cursor-custom", {
            width: `${event.target.dataset["cursorSize"]}`,
            height: `${event.target.dataset["cursorSize"]}`,
            duration: 0.5,
            ease: Expo.easeOut,
          });
        }
      });
    });

    sizeChangingTargets.forEach((element) => {
      element.addEventListener("mouseleave", (event: MouseEvent) => {
        if (event.target instanceof HTMLElement && cursor.current) {
          gsap.to(".cursor-custom", {
            width: 8,
            height: 8,
            duration: 0.5,
            ease: Expo.easeOut,
          });
        }
      });
    });

    stickyTargets.forEach((element) => {
      element.addEventListener("mouseenter", () => (onOverElement = true));
    });
    stickyTargets.forEach((element) => {
      element.addEventListener("mouseleave", () => (onOverElement = false));
    });

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      document.body.removeEventListener("mouseenter", () => {});
      document.body.removeEventListener("mouseleave", () => {});

      sizeChangingTargets.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });

      stickyTargets.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  });

  useTicker(persist);

  return (
    <div
      ref={cursor}
      className="cursor-custom pointer-events-none fixed top-0 left-0 z-[1000] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-[#c3ffff] mix-blend-difference will-change-[transform,_height,_width,_color]"
      style={{
        width: 8,
        height: 8,
      }}
    />
  );
};

const getScale = (cx?: number, cy?: number) => {
  if (cx && cy) {
    const distance = Math.sqrt(Math.pow(cx, 2) + Math.pow(cy, 2));
    return Math.min(distance / 735, 0.35);
  }
  return;
};

const getAngle = (cx?: number, cy?: number) => {
  if (cx && cy) {
    return (Math.atan2(cy, cx) * 180) / Math.PI;
  }
  return;
};

const NO_VAL = {};

const useInstance = (value = {}) => {
  const ref = useRef(NO_VAL);
  if (ref.current === NO_VAL) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
};

const useTicker = (callback: () => void, paused?: boolean) => {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
};
