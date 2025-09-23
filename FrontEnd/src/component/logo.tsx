// components/Logo.tsx

import clsx from "clsx";

type LogoProps = {
  size?: number;           // pixel size of the mark
  label?: string;          // brand text
  className?: string;      // tailwind classes to override
  dark?: boolean;          // dark mode toggle (forces colors)
};

export default function Logo({

  className,
  dark = true,
}: LogoProps) {

   // rounded radius\

  return (
    <div className={clsx("inline-flex items-center gap-2 ", className)}>
     <img src="./logo copy.png" width={40} alt="" />

      <span
        className={clsx(
          "font-semibold tracking-tight",
          dark ? "text-white" : "text-slate-900",
          "text-[18px] sm:text-[20px] leading-none"
        )}
        style={{ fontFeatureSettings: "'kern' 1, 'liga' 1" }}
      >
        BoxBlush
      </span>
    </div>
  );
}
