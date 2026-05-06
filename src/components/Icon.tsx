interface IconProps {
  name: string;
  size?: number;
  stroke?: string;
}

export default function Icon({ name, size = 28, stroke = "currentColor" }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "circle":
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" />
          <path d="M3 19c.8-2.6 3-4 5-4s3.5 1 4.5 2.5" />
          <path d="M11 19c.8-2.6 3-4 5-4s4.2 1.4 5 4" />
        </svg>
      );
    case "companion":
      return (
        <svg {...common}>
          <path d="M4 12c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M9 21l-2.5-2.5L9 16" />
          <path d="M15 21l2.5-2.5L15 16" />
          <path d="M12 12v9" />
        </svg>
      );
    case "signpost":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M5 6h11l3 2.5L16 11H5z" />
          <path d="M19 14H8l-3 2.5L8 19h11z" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4z" />
          <path d="M3 7v10l9 4 9-4V7" />
          <path d="M12 11v10" />
          <path d="M7.5 5.2L16.5 9.2" />
        </svg>
      );
    case "talk":
      return (
        <svg {...common}>
          <path d="M4 5h16v11H8l-4 4z" />
          <path d="M9 10h6M9 13h4" />
        </svg>
      );
    case "volunteer":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
        </svg>
      );
    case "fundraise":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M14.5 9.5c-.6-1-1.6-1.5-2.7-1.4-1.5.1-2.5 1-2.5 2.2 0 2.7 5.4 1.5 5.4 4.2 0 1.3-1.2 2.3-2.7 2.4-1.2.1-2.2-.4-2.8-1.4" />
          <path d="M12 6.5V8M12 16v1.5" />
        </svg>
      );
    case "partner":
      return (
        <svg {...common}>
          <path d="M9 11l-3 3a2 2 0 102.8 2.8l1.7-1.7" />
          <path d="M15 13l3-3a2 2 0 10-2.8-2.8l-1.7 1.7" />
          <path d="M10 14l4-4" />
        </svg>
      );
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close":
      return <svg {...common}><path d="M6 6l12 12M18 6l-12 12" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "ig":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r=".8" fill={stroke} />
        </svg>
      );
    case "fb":
      return (
        <svg {...common}>
          <path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a0 0 0 011-1z" />
        </svg>
      );
    case "tt":
      return (
        <svg {...common}>
          <path d="M14 4v10.5a3.5 3.5 0 11-3.5-3.5" />
          <path d="M14 4c.5 2.5 2 4 4.5 4.5" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    default:
      return null;
  }
}
