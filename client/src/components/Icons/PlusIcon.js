export const PlusIcon = ({
  size = '24',
  ariaLabel = "Add",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={ariaLabel}
  >
    <path d="M20 12L8 5V19L20 12Z" fill="white" />
  </svg>
);
