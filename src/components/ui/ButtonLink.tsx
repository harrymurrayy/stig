import Link from "next/link";
import Icon from "@/components/Icon";

const SIZES = {
  sm: "px-4.5 py-2.5 text-[14px]",
  md: "px-5 py-3 text-[14.5px]",
  lg: "px-5.5 py-3.5 text-[15.5px]",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  /** Opens in a new tab. Use for anything off thestiginitiative.com. */
  external?: boolean;
  arrow?: boolean;
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  size = "lg",
  external = false,
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex items-center gap-2 rounded-full font-semibold text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px ${SIZES[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={18} />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
