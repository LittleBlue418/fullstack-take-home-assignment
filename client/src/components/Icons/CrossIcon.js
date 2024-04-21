export const CrossIcon = ({
  size = "24",
  ariaLabel = "Fail",
  stroke = "currentcolor",
  className = ""
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
      stroke={stroke}
      d="M18 6L6 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={stroke}
      d="M6 6L18 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
