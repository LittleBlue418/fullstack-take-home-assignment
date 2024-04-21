import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  onClick,
  className,
  ariaLabel,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={twMerge(`font-semibold text-lg`, className)}
    disabled={disabled}
  >
    {children}
  </button>
);
