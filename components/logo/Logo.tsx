
interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "light" | "dark";
  size?: "compact" | "default";
}

export function Logo({
  className = "",
  showTagline = true,
  variant = "dark",
  size = "default",
}: LogoProps) {
  const isLight = variant === "light";
  const compact = size === "compact";

  const starColor = "#FFC107";
  const orangeColor = "#FF6B00";
  const textColor = isLight ? "#FFFFFF" : "#1b1c1a";
  const mutedColor = isLight ? "#E8E8E8" : "#444748";
  const lineColor = isLight
    ? "rgba(255,255,255,0.65)"
    : "#444748";

  return (
    <div
      className={`flex w-full justify-center ${className}`}
      role="img"
      aria-label="5 Star Builders Merchants Ltd"
    >
      {/* Shared-width logo composition */}
      <div className="inline-flex w-fit max-w-full flex-col items-center">

        {/* Stars - same width as brand and tagline */}
        <div
          className={`flex w-full items-center justify-between ${
            compact ? "mb-1" : "mb-1.5 sm:mb-2.5"
          }`}
        >
          {[0, 1, 2, 3, 4].map((star) => (
            <svg
              key={star}
              viewBox="0 0 100 100"
              fill={starColor}
              aria-hidden="true"
              className={
                compact
                  ? "w-4 h-4 sm:w-5 sm:h-5"
                  : "w-[25px] h-[25px] sm:w-10 sm:h-10 md:w-12 md:h-12"
              }
            >
              <path d="M50 2 L61.8 36.5 L98 37.5 L69 60.5 L79 96 L50 75 L21 96 L31 60.5 L2 37.5 L38.2 36.5 Z" />
            </svg>
          ))}
        </div>

        {/* Brand name */}
        <div className="flex w-full items-center justify-center gap-2 leading-none whitespace-nowrap">
          <span
            className={`shrink-0 font-display font-extrabold uppercase tracking-[-0.055em] ${
              compact
                ? "text-[1.65rem] sm:text-[2.15rem]"
                : "text-[2.25rem] sm:text-5xl md:text-7xl"
            }`}
            style={{ color: orangeColor }}
          >
            5STAR
          </span>

          <div className="flex shrink-0 flex-col justify-center gap-[0.12em]">
            <span
              className={`font-display font-extrabold uppercase tracking-[-0.035em] leading-[0.95] ${
                compact
                  ? "text-[0.85rem] sm:text-xl"
                  : "text-[1.2rem] sm:text-2xl md:text-[2rem]"
              }`}
              style={{ color: textColor }}
            >
              BUILDERS
            </span>

            <span
              className={`font-display font-bold uppercase tracking-[-0.025em] leading-none ${
                compact
                  ? "text-[0.55rem] sm:text-xs"
                  : "text-[0.78rem] sm:text-base md:text-xl"
              }`}
              style={{ color: mutedColor }}
            >
              MERCHANTS LTD
            </span>
          </div>
        </div>

        {/* Tagline - same width as stars and brand */}
        {showTagline && (
          <div
            className={`flex w-full flex-col items-center ${
              compact ? "mt-1.5 gap-1" : "mt-2 sm:mt-2.5 gap-1.5"
            }`}
          >
            <div
              className="h-px w-full"
              style={{ backgroundColor: lineColor }}
            />

            <p
              className={`w-full text-center font-display font-bold uppercase whitespace-nowrap ${
                compact
                  ? "text-[7px] tracking-[0.08em]"
                  : "text-[9px] tracking-[0.025em] sm:text-xs sm:tracking-[0.035em]"
              }`}
              style={{ color: mutedColor }}
            >
              REPAIR ★ RENOVATION ★ ANY BUILDING WORK
            </p>

            <div
              className="h-px w-full"
              style={{ backgroundColor: lineColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
