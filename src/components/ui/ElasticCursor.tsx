/**
 * Disclaimer: This component is not entirely my own
 */

"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { useMouse } from "@/hooks/use-mouse";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

function useTicker(callback: any, paused: boolean) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

const EMPTY = {} as {
  x: Function;
  y: Function;
  r?: Function;
  width?: Function;
  height?: Function;
  sx?: Function;
  sy?: Function;
};

function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function findHoverElement(el: HTMLElement): HTMLElement | null {
  let current = el;
  for (let i = 0; i < 3; i++) {
    if (current.classList.contains("cursor-can-hover")) {
      return current;
    }
    if (!current.parentElement) break;
    current = current.parentElement;
  }
  return null;
}

const CURSOR_DIAMETER = 50;

function ElasticCursor() {
  const { isLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const jellyRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useMouse();

  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  useLayoutEffect(() => {
    if (!jellyRef.current) return;
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width", "px");
    set.height = gsap.quickSetter(jellyRef.current, "height", "px");
  }, []);

  const loop = useCallback(() => {
    if (!set.width || !set.sx || !set.sy || !set.r || !set.height) return;
    const rotation = getAngle(+vel.x, +vel.y);
    const scale = getScale(+vel.x, +vel.y);

    if (!isHovering && !isLoading) {
      set.x(pos.x);
      set.y(pos.y);
      set.width(50 + scale * 300);
      set.height(50 + scale * 300);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    } else {
      set.r(0);
    }
  }, [isHovering, isLoading]);

  const [cursorMoved, setCursorMoved] = useState(false);

  useLayoutEffect(() => {
    if (isMobile || isLoading) return;

    const setFromEvent = (e: MouseEvent) => {
      if (!jellyRef.current) return;
      if (!cursorMoved) {
        setCursorMoved(true);
      }

      const el = e.target as HTMLElement;
      const hoverElement = findHoverElement(el);

      if (hoverElement) {
        const rect = hoverElement.getBoundingClientRect();
        setIsHovering(true);
        gsap.to(jellyRef.current, {
          rotate: 0,
          duration: 0,
        });
        gsap.to(jellyRef.current, {
          width: rect.width + 30,
          height: rect.height + 30,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: 15,
          duration: 1.2,
          ease: "elastic.out(1, 0.4)",
        });
      } else {
        gsap.to(jellyRef.current, {
          borderRadius: 50,
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          duration: 0.4,
        });
        setIsHovering(false);
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      gsap.to(pos, {
        x: clientX,
        y: clientY,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        onUpdate: () => {
          // @ts-ignore
          vel.x = (clientX - pos.x) * 1.2;
          // @ts-ignore
          vel.y = (clientY - pos.y) * 1.2;
        },
      });

      loop();
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isLoading, loop, cursorMoved]);

  useTicker(loop, isLoading || !cursorMoved || isMobile);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={jellyRef}
        id="jelly-cursor"
        style={{
          position: "fixed",
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "2px solid currentColor",
          backdropFilter: "invert(100%)",
          pointerEvents: "none",
          willChange: "transform, width, height",
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          backdropFilter: "invert(100%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default ElasticCursor;
