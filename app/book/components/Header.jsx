import { wrap } from "./shared";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-[10px] bg-[#0C111D] border-b border-[#11202D]">
      <div className={`${wrap} flex items-center justify-between py-4`}>
        <a
          className="flex items-center gap-[0.6rem] font-[Montserrat,sans-serif] font-black uppercase text-[0.9rem] tracking-[0.02em] text-[#f5efe6] no-underline"
          href="#top"
          aria-label="Compound Intelligence"
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
            className="w-[30px] h-[30px]"
          >
            <path
              d="M8 24c0-7 5-12 12-12h12"
              stroke="#2f6fe4"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M27 7l5 5-5 5"
              stroke="#2f6fe4"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 16c0 7-5 12-12 12H8"
              stroke="#d97757"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M13 23l-5 5 5 5"
              stroke="#d97757"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Compound Intelligence
        </a>
        <a
          href="#signup"
          className="max-[900px]:hidden h-11 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#E37915] text-white text-lg font-bold font-['Manrope'] leading-7 no-underline overflow-hidden shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.08)] transition-colors duration-150 hover:bg-[#e69579]"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
