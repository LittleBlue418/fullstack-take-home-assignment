export const TickIcon = ({
  size = "24",
  ariaLabel = "Success",
  stroke = "currentcolor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={ariaLabel}
    className={`block ${className}`}
  >
    <path
      d="M20 6L9 17L4 12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
