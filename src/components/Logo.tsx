import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  footer?: boolean;
  size?: number;
  className?: string;
}

export default function Logo({ footer = false, size = 80, className = "" }: LogoProps) {
  return (
    <Link href={footer ? "/" : "/#top"} className="inline-flex items-center">
      <Image
        src={footer ? "/logo-white.svg" : "/logo-transparent.svg"}
        alt="The Stig Initiative — The Jack Murray Trust"
        width={size}
        height={size}
        className={`block flex-none ${className}`}
      />
    </Link>
  );
}
