import US from "country-flag-icons/react/3x2/US";

type FlagIconProps = {
  country: "us" | "es";
  className?: string;
};

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.5 15"
      aria-hidden="true"
      className={`overflow-hidden rounded-sm shadow-sm ${className ?? ""}`}
    >
      <path fill="#D03433" d="M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z" />
      <path fill="#FBCA46" d="M0 4h22.5v7H0V4z" />
    </svg>
  );
}

export default function FlagIcon({ country, className = "h-10 w-[3.75rem]" }: FlagIconProps) {
  if (country === "es") {
    return <SpainFlag className={className} />;
  }

  return (
    <US
      aria-hidden="true"
      className={`overflow-hidden rounded-sm shadow-sm ${className}`}
    />
  );
}
