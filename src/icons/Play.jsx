export function Play({className}) {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g filter="url(#filter0_b_1_29748)">
        <circle
          cx="14.435"
          cy="14.769"
          r="13.5659"
          fill="white"
          fillOpacity="0.2"
        />
        <circle
          cx="14.435"
          cy="14.769"
          r="13.5659"
          stroke="white"
          strokeWidth="0.904394"
        />
      </g>
      <path
        d="M19.8602 14.218C20.4631 14.5661 20.4631 15.4364 19.8602 15.7845L12.0598 20.288C11.4569 20.6361 10.7032 20.201 10.7032 19.5048L10.7032 10.4977C10.7032 9.80147 11.4569 9.36635 12.0598 9.71445L19.8602 14.218Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_1_29748"
          x="-1.39179"
          y="-1.05786"
          width="31.6537"
          height="31.6538"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.904394" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_29748"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_29748"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
