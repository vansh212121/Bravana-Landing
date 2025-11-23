"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TalkButton = React.forwardRef(
  ({ className, text = "Let's Talk", variant = "light", ...props }, ref) => {
    const [isHover, setIsHover] = React.useState(false);

    const palette =
      variant === "dark"
        ? {
            baseBg: "#000000",
            baseText: "#ffffff",
            hoverText: "#ffffff",
            dotBase: "#E60000",
            dotHover: "#ffffff",
            accent: "#E70000",
            border: "rgba(255,255,255,0.15)", // Subtle border for dark mode
          }
        : {
            baseBg: "#ffffff",
            baseText: "#000000",
            hoverText: "#ffffff",
            dotBase: "#E70000",
            dotHover: "#ffffff",
            accent: "#E60000",
            border: "rgba(0,0,0,0.08)", // Subtle border for light mode
          };

    // Premium easing curve (starts snappy, ends smooth)
    const transitionSpring = {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1],
    };
    // #E60000

    return (
      <motion.button
        ref={ref}
        type="button"
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative inline-flex items-center justify-center gap-3 rounded-full px-6 py-3",
          "overflow-hidden",
          "shadow-md hover:shadow-lg transition-shadow duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500",
          variant === "dark" ? "ring-offset-black" : "ring-offset-white",
          className
        )}
        style={{
          backgroundColor: palette.baseBg,
          boxShadow: `inset 0 0 0 1px ${palette.border}`,
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        initial="rest"
        animate={isHover ? "hover" : "rest"}
        {...props}
      >
        {/* EXPANDING CIRCLE */}
        <motion.span
          className="pointer-events-none absolute right-0 top-1/2 aspect-square w-16 -translate-y-1/2 rounded-full"
          variants={{
            rest: {
              scale: 0,
              x: 0,
              opacity: 1,
              backgroundColor: palette.accent,
            },
            hover: {
              scale: 20, // Ensure it covers the whole button easily
              x: 10, // Slight offset to follow the mouse movement feel
              opacity: 1,
              backgroundColor: palette.accent,
            },
          }}
          transition={transitionSpring}
        />

        {/* TEXT + DOT */}
        <motion.span
          className="relative z-10 flex items-center gap-3 text-sm sm:text-base font-medium tracking-wide"
          variants={{
            rest: {
              color: palette.baseText,
              x: 0,
            },
            hover: {
              color: palette.hoverText,
              x: -5, // Subtle slide to left creates momentum
            },
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <span>{text}</span>

          <motion.span
            className="block rounded-full"
            style={{ width: 8, height: 8 }}
            variants={{
              rest: {
                scale: 1.7,
                backgroundColor: palette.dotBase,
              },
              hover: {
                scale: 2,
                backgroundColor: palette.dotHover,
              },
            }}
            transition={transitionSpring}
          />
        </motion.span>
      </motion.button>
    );
  }
);

TalkButton.displayName = "TalkButton";

export { TalkButton };
