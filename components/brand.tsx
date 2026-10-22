import Image from "next/image";

export function Brand({
  large = false,
  href = "#hjem",
}: {
  large?: boolean;
  href?: string;
}) {
  return (
    <a
      aria-label="WW Interior – til forsiden"
      className={`inline-flex items-center ${large ? "gap-3" : "gap-2.5"}`}
      href={href}
    >
      <Image
        alt=""
        aria-hidden="true"
        className={large ? "size-[68px] sm:size-[76px]" : "size-14"}
        height={large ? 76 : 56}
        src="/images/logo-round-transparent-v2.png"
        width={large ? 76 : 56}
      />
      <span className="flex flex-col text-ink">
        <span className={`${large ? "text-[13px] sm:text-sm" : "text-xs"} font-medium tracking-[0.18em]`}>
          WW INTERIOR
        </span>
        {large && (
          <span className="mt-1 hidden text-[9px] uppercase tracking-[0.21em] text-muted sm:block">
            Wenche Wie · Bergen
          </span>
        )}
      </span>
    </a>
  );
}
