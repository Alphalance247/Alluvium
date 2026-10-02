const CANONICAL_URL = "https://alluvium.net/book/";

const NEXT_STEPS = [
  "The books launch on Amazon in Kindle, paperback and audiobook.",
  "You get the launch email first, before the wider announcement.",
  "Your launch-week price is held for the whole week, on every book in the series.",
];

export default function Content() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary-900 p-2.5">
      <div className="pointer-events-none absolute left-[574px] top-[-359px] h-[1052px] w-[1052px] rounded-full bg-tertiary-200 mix-blend-color-dodge" />

      <main className="relative flex w-full max-w-[648px] flex-col gap-10 overflow-hidden rounded-lg bg-tertiary-400 p-10 outline outline-1 -outline-offset-1 outline-tertiary-300 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]">
        <div className="flex flex-col items-center gap-6">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-default-100/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E37915" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5l5 5L20 6.5" />
            </svg>
          </div>
          <span className="font-sans text-sm font-bold uppercase leading-4 tracking-wide text-default-100">
            Early access confirmed
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="text-center font-serif text-4xl font-bold leading-10 text-white">You are on the list</h1>
            <p className="text-center font-sans text-lg font-medium leading-7 text-white">
              Thank you. You will get one email when the Compound Intelligence series goes live, with the
              launch-week price on the book for your platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-tertiary-300 p-4">
          <div className="font-sans text-sm font-extrabold uppercase leading-6 tracking-wide text-white">
            What happens next
          </div>
          <ol className="list-decimal pl-5 font-sans text-base font-medium leading-6 text-white/80">
            {NEXT_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(CANONICAL_URL)}`}
              target="_blank"
              rel="noopener"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-default-100 px-4 py-2.5 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-default-200 transition-colors duration-150 hover:bg-default-200"
            >
              Share on LinkedIn
            </a>
            <a
              href="/book"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg px-6 py-2.5 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-white/80"
            >
              Back to series
            </a>
          </div>
          <a
            href="https://www.youtube.com/@compound-intelligence-claude?sub_confirmation=1"
            target="_blank"
            rel="noopener"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg px-6 py-2.5 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-white/80"
          >
            Subscribe on YouTube
          </a>
          <p className="text-center font-sans text-xs font-medium leading-4 tracking-wide text-white/80">
            Know someone who runs their work on one of these platforms? Forward them the page:{" "}
            <a href={CANONICAL_URL} className="underline">
              alluvium.net/book
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
