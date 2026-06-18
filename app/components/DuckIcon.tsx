"use client";

export default function DuckIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C9.5 2 7.5 3.5 7.5 5.5C7.5 6.5 8 7.5 9 8.2V9H6C4.5 9 3.5 10 3.5 11.5C3.5 13 4.5 14 6 14H7.5C7.5 17 9.5 19.5 12 20C12.5 20.2 13 20.3 13.5 20.3C15.5 20.3 17 18.8 17.5 17C18.5 17.2 19.5 16.5 19.5 15.5C19.5 14.8 19 14.2 18.5 14C19.5 13.2 20 12 20 10.5C20 8 18 6 15.5 6H15V5.5C15 3.5 13.5 2 12 2Z"
        fill="currentColor"
      />
      <circle cx="10" cy="5.5" r="1" fill="#0a0a0a" />
      <path
        d="M15.5 8C16.5 8 17.5 8.5 18 9.5"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
