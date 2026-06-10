import ES from "country-flag-icons/react/3x2/ES";
import US from "country-flag-icons/react/3x2/US";

type FlagIconProps = {
  country: "us" | "es";
  className?: string;
};

const flags = {
  us: US,
  es: ES,
};

export default function FlagIcon({ country, className = "h-10 w-[3.75rem]" }: FlagIconProps) {
  const Flag = flags[country];

  return (
    <Flag
      aria-hidden="true"
      className={`overflow-hidden rounded-sm shadow-sm ${className}`}
    />
  );
}
