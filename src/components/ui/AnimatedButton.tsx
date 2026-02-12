import { motion } from "framer-motion";
import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { VscArrowRight } from "react-icons/vsc";

interface AnimatedButtonProps {
  text: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  bgColor?: string;
  hoverColor?: string;
  iconColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnimatedButton = ({
  text,
  to,
  href,
  icon,
  bgColor = "",
  hoverColor = "",
  iconColor = "",
  textColor = "",
  hoverTextColor = "",
  borderColor = "",
  className = "",
  onClick,
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconMoveDistance, setIconMoveDistance] = useState(0);
  const [textMoveDistance, setTextMoveDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      if (buttonRef.current && containerRef.current && textRef.current && iconRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        const computedStyle = window.getComputedStyle(buttonRef.current);
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
        const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
        const contentWidth = buttonWidth - paddingLeft - paddingRight;
        
        // Icon width based on screen size
        const iconWidth = buttonWidth > 400 ? 40 : 32;
        
        // Icon should move to right edge, but stay within padding
        // Move icon so its right edge aligns with content right edge (accounting for padding)
        const iconMove = contentWidth - iconWidth;
        setIconMoveDistance(Math.max(0, Math.min(iconMove, contentWidth - iconWidth)));
        
        // Text moves left to swap positions with icon
        // Simple swap: move text left by icon width + gap
        const textMove = -(iconWidth + 16); // icon width + gap
        setTextMoveDistance(textMove);
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    // Also update on mount after a short delay to ensure elements are rendered
    setTimeout(updateDistance, 100);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  const defaultIcon = (
    <VscArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-ultrasonic-blue" />
  );

  const iconToRender = icon ?? defaultIcon;

  const content = (
    <motion.button
      ref={buttonRef}
      className={`group relative flex items-center w-full py-2 sm:py-1 px-2 sm:px-1 sm:pr-4 border ${borderColor} ${bgColor} overflow-hidden ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Background fill on hover */}
      <motion.div
        className={`absolute inset-0 ${hoverColor}`}
        initial={{ x: "-100%" }}
        variants={{
          hover: { x: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Container to hold icon and text */}
      <div
        ref={containerRef}
        className="relative flex items-center w-full justify-between"
      >
        {/* Icon Box - starts on left */}
        <motion.div
          ref={iconRef}
          className={`relative z-10 flex rounded-lg items-center justify-center w-8 h-8 sm:w-10 sm:h-10 ${iconColor} shrink-0`}
          initial={{ x: 0 }}
          variants={{
            hover: {
              x: iconMoveDistance,
              rotate: 360,
            },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {iconToRender}
        </motion.div>

        {/* Text - with left padding */}
        <motion.span
          ref={textRef}
          className={`relative z-10 ${textColor} font-medium text-xs sm:text-sm md:text-base shrink-0 pl-2 sm:pl-4`}
          initial={{ x: 0 }}
          variants={{
            hover: {
              x: textMoveDistance,
            },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
        <motion.span
          variants={{
            hover: {
              color:
                hoverTextColor === "text-gray-900"
                  ? "#111827"
                  : hoverTextColor === "text-white"
                    ? "#ffffff"
                    : undefined,
            },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {text}
        </motion.span>
      </motion.span>
      </div>
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
};

export default AnimatedButton;
