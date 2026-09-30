"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { platformOptions } from "./shared";

const cardClass =
  "relative w-full max-w-[464px] overflow-hidden bg-[#414D57] rounded-lg p-6 outline outline-1 -outline-offset-1 outline-tertiary-300 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]";

const fieldLabelClass = "font-sans text-sm font-semibold leading-5 text-white";

const fieldInputClass =
  "w-full font-sans text-base text-white bg-transparent rounded-lg outline outline-1 -outline-offset-1 outline-[#92989E] px-3.5 py-2 focus:outline-2 focus:outline-[#5b8ff0] transition-[outline-color] duration-150";

const submitButtonClass =
  "w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-default-100 font-sans text-base font-bold text-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] outline outline-1 -outline-offset-1 outline-default-200 transition-colors duration-150 hover:bg-default-200";

// Port of the two `early-access` Netlify forms from site/index.html (hero +
// final CTA). Netlify Forms has no equivalent on alluvium.net, so submission
// is simulated: it redirects straight to the thanks page instead of posting.
export default function SignupForm({
  idPrefix,
  anchorId,
  source,
  heading,
  subtext,
  namePlaceholder,
  fineprint,
}) {
  const fineprintLines = fineprint.split("\n");
  const router = useRouter();
  const [sourceValue, setSourceValue] = useState(source);
  const [status, setStatus] = useState("idle"); // idle | submitting | error

  // Matches the attribution script at the bottom of site/index.html: prefix
  // the hidden `source` field with ?src= from the URL, e.g. team26-book-hero.
  useEffect(() => {
    try {
      const v = new URLSearchParams(window.location.search).get("src");
      if (!v) return;
      const cleaned = v.replace(/[^a-z0-9-]/gi, "").slice(0, 40);
      setSourceValue(`${cleaned}-${source}`);
    } catch (e) {
      // ignore, keep default source
    }
  }, [source]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Honeypot: a filled-in bot-field means a bot filled the form. Drop it silently.
    if (data.get("bot-field")) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/book-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          firstName: data.get("first_name"),
          system: data.get("platform"),
        }),
      });

      if (!res.ok) throw new Error("Signup request failed");

      router.push("/book/thanks");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className={cardClass} id={anchorId}>
      <h3 className="font-serif text-2xl font-bold leading-8 text-white mb-2">
        {heading}
      </h3>
      <p className="font-sans text-base text-white/90 leading-6 mb-6">
        {subtext}
      </p>
      <form
        name="early-access"
        method="POST"
        onSubmit={handleSubmit}
        className="grid gap-4"
      >
        <input type="hidden" name="form-name" value="early-access" />
        <input type="hidden" name="source" value={sourceValue} />
        <p className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label>
            Leave this empty: <input name="bot-field" />
          </label>
        </p>
        <div className="grid gap-1.5">
          <label className={fieldLabelClass} htmlFor={`${idPrefix}-name`}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={fieldInputClass}
          />
        </div>
        <div className="grid gap-1.5">
          <label className={fieldLabelClass} htmlFor={`${idPrefix}-email`}>
            Work email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldInputClass}
          />
        </div>
        <div className="grid gap-1.5">
          <label className={fieldLabelClass} htmlFor={`${idPrefix}-platform`}>
            Which system do you live in?
          </label>
          <select
            id={`${idPrefix}-platform`}
            name="platform"
            className={`${fieldInputClass} appearance-none bg-no-repeat bg-[right_0.875rem_center]`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23b8c0cf' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" className="text-black">
              {/* Pick one (optional) */}
            </option>
            {platformOptions.map((option) => (
              <option key={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`${submitButtonClass} disabled:opacity-70`}
        >
          {status === "submitting" ? "Submitting..." : "Notify me at launch"}
        </button>
        {status === "error" && (
          <p className="text-center font-sans text-xs font-semibold text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-center font-sans text-xs font-semibold text-white/80 tracking-wide">
          {fineprintLines.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </form>
    </div>
  );
}
