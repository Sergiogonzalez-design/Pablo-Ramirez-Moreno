import { CircleFlag } from "react-circle-flags";

type FlagIconProps = {
  country: "us" | "es";
  className?: string;
};

export default function FlagIcon({ country, className = "h-12 w-12" }: FlagIconProps) {
  return (
    <CircleFlag
      countryCode={country}
      className={className}
      height={48}
      width={48}
    />
  );
}
