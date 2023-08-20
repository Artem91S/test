export function DropDown({className,stroke,width=24, height=24,oncClick}) {
  return (
    <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 10L12 14L16 10"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}