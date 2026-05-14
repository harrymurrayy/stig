interface LogoProps {
  footer?: boolean;
}

export default function Logo({ footer = false }: LogoProps) {
  if (footer) {
    return (
      <a href="/" className="logo">
        {/* Icon-only variant — stays legible on the dark footer background */}
        <img
          src="/Stig-icon.svg"
          alt=""
          aria-hidden="true"
          className="logo-icon"
          style={{ height: 40, width: "auto" }}
        />
        <span className="logo-text">
          <span className="logo-name">The Stig Initiative</span>
          <span className="logo-sub">The Jack Murray Trust</span>
        </span>
      </a>
    );
  }

  return (
    <a href="#top" className="logo">
      <img
        src="/Stig-icon.svg"
        alt=""
        aria-hidden="true"
        className="logo-icon"
        style={{ height: 40, width: "auto" }}
      />
      <span className="logo-text">
        <span className="logo-name">The Stig Initiative</span>
        <span className="logo-sub">The Jack Murray Trust</span>
      </span>
    </a>
  );
}
