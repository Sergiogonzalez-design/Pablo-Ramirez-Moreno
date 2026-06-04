import Image from "next/image";
import Link from "next/link";

type CompanyLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

export default function CompanyLogo({
  variant = "nav",
  className = "",
  priority = false,
}: CompanyLogoProps) {
  const sizeClass =
    variant === "footer"
      ? "h-32 w-auto sm:h-40 md:h-48"
      : "h-10 w-auto sm:h-11";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/Onix media new color logo.png"
        alt="Onix Media"
        width={480}
        height={480}
        className={`${sizeClass} object-contain`}
        priority={priority}
        sizes={variant === "footer" ? "(max-width: 640px) 320px, 400px" : "(max-width: 768px) 280px, 360px"}
      />
    </Link>
  );
}
