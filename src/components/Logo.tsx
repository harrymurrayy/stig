import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  footer?: boolean;
}

export default function Logo({ footer = false }: LogoProps) {
  return (
    <Link href={footer ? "/" : "/#top"} className="inline-flex items-center gap-3">
      <Image
        src="/Stig-icon.svg"
        alt=""
        aria-hidden
        width={40}
        height={40}
        className="block flex-none"
      />
      <span className="flex flex-col leading-[1.05]">
        <span className={`font-bold text-[17px] tracking-[-0.01em] ${footer ? "text-paper" : "text-ink"}`}>
          The Stig Initiative
        </span>
        <span className={`text-[11.5px] font-normal tracking-[0.01em] max-sm:hidden ${footer ? "text-paper/55" : "text-muted"}`}>
          The Jack Murray Trust
        </span>
      </span>
    </Link>
  );
}
