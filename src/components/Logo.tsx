interface LogoProps {
  footer?: boolean;
}

export default function Logo({ footer = false }: LogoProps) {
  return (
    <a href="#top" className="logo">
      <span
        className="logo-mark"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      >
        <span className="logo-mark-inner" />
      </span>
      <span className="logo-text">
        <span className="logo-name">The Stig Initiative</span>
        <span className="logo-sub">
          {footer ? "The Jack Murray Foundation" : "The Jack Murray Foundation"}
        </span>
      </span>
    </a>
  );
}
