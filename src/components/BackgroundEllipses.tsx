export default function BackgroundEllipses() {
  return (
    <div className="absolute -z-0 w-full h-full">
      <svg viewBox="0 0 1448 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <g clipPath="url(#clip0)">
          <rect width="1448" height="1024" fill="#FAF9FB"/>
          <g filter="url(#filter0)">
            <ellipse cx="1262.5" cy="153.5" rx="528.5" ry="504.5" fill="#A175FF" fillOpacity="0.3"/>
          </g>
          <g filter="url(#filter1)">
            <ellipse cx="200.5" cy="875.5" rx="487.5" ry="453.5" fill="#4FC4FF" fillOpacity="0.3"/>
          </g>
        </g>
        <defs>
          <filter id="filter0" x="134" y="-951" width="2257" height="2209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur"/>
          </filter>
          <filter id="filter1" x="-787" y="-78" width="1975" height="1907" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur"/>
          </filter>
          <clipPath id="clip0">
            <rect width="1448" height="1024" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
