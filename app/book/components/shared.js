// Shared Tailwind class strings for the Compound Intelligence page components.
// Centralized here so the section components in this folder stay swappable
// without re-typing the same button/card/field styles in each one.

export const wrap = "w-[min(1150px,92vw)] mx-auto";

export const displayFont =
  "font-[Montserrat,sans-serif] font-black uppercase tracking-[-0.01em] leading-[1.02]";

export const uiFont = "font-[Montserrat,sans-serif] font-extrabold uppercase";

const btnBase =
  "inline-flex items-center justify-center gap-2 font-[Montserrat,sans-serif] font-extrabold text-[0.9rem] tracking-[0.02em] uppercase px-[1.35rem] py-[0.85rem] rounded-xl border-0 cursor-pointer no-underline whitespace-nowrap transition-[transform,box-shadow,background] duration-150";

export const btnCoral = `${btnBase} bg-[#d97757] text-white shadow-[0_8px_24px_rgba(217,119,87,0.28)] hover:bg-[#e69579] hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(217,119,87,0.38)]`;

export const btnGhost = `${btnBase} bg-transparent text-[#f5efe6] border border-[rgba(245,239,230,0.25)] hover:border-[#f5efe6]`;

export const btnSm = "!px-4 !py-[0.6rem] !text-[0.78rem]";

export const sectionHeadKicker =
  "font-[Montserrat,sans-serif] font-extrabold text-[0.75rem] tracking-[0.16em] uppercase text-[#e69579] mb-[0.8rem]";

export const sectionHeadH2 = `${displayFont} text-[clamp(1.8rem,3.6vw,2.8rem)] mb-[0.9rem]`;

export const sectionHeadP = "text-[#b8c0cf] text-[1.05rem]";

export const card =
  "bg-[linear-gradient(160deg,#111f36,#182a47)] border border-[rgba(245,239,230,0.1)] rounded-[22px] p-[1.8rem] shadow-[0_30px_60px_rgba(0,0,0,0.35)]";

export const fieldLabel =
  "text-[0.78rem] font-semibold tracking-[0.04em] uppercase text-[#7f8ba0]";

export const fieldInput =
  "w-full text-base text-[#f5efe6] bg-[rgba(11,21,38,0.7)] border border-[rgba(245,239,230,0.16)] rounded-xl px-4 py-[0.85rem] outline-none transition-[border,box-shadow] duration-150 focus:border-[#5b8ff0] focus:shadow-[0_0_0_3px_rgba(47,111,228,0.25)]";

export const hiddenField = "absolute -left-[9999px] w-px h-px overflow-hidden";

export const line = "rgba(245,239,230,0.1)";

// TODO: replace with the real Amazon listing URL once it's available.
// Shared so every "Buy on Amazon" CTA on the page points at one place to update.
export const AMAZON_URL = "#";

export const platformOptions = [
  "Atlassian (Jira, Confluence)",
  "ServiceNow",
  "Microsoft 365",
  "Salesforce",
  "SAP",
  "Workday",
  "Oracle",
  "Google Workspace",
  "Several - I lead a team or budget",
];
