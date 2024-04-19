import { twMerge } from 'tailwind-merge'

export const Button = ({ children, onClick, className, ariaLabel }) => (
  <button onClick={onClick} aria-label={ariaLabel} className={twMerge(`font-semibold text-lg`, className)}>
    {children}
  </button>
);
