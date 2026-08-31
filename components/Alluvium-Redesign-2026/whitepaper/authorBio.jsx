import React from "react";
import RichText from "./richText";

const MailIcon = () => (
  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1D2939] shrink-0">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
      />
    </svg>
  </span>
);

const LinkedInIcon = () => (
  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1D2939] shrink-0">
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM.5 8.98h8.94V24H.5V8.98zM8.9 8.98h8.58v2.05h.12c1.2-2.06 4.11-2.24 5.53-.42 1.58 1.83 1.42 4.7 1.42 8.02V24h-9.14v-9.36c0-2.16-.04-4.94-3-4.94-3.02 0-3.5 2.36-3.5 4.8V24H8.9V8.98z" />
    </svg>
  </span>
);

const AuthorBio = ({
  name,
  role,
  avatar = "https://placehold.co/117x117",
  bioParagraphs = [],
  email,
  linkedin,
}) => {
  return (
    <div className="w-full pt-10 border-t border-slate-200">
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-2">
          <span className="w-5 h-1 bg-default-100" />
          <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
            About the author
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex flex-col items-start gap-3.5 shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-28 h-28 rounded-lg object-cover"
            />
            {(email || linkedin) && (
              <div className="flex flex-col items-start gap-2">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-[#344054] text-sm font-semibold font-sans"
                  >
                    <MailIcon />
                    {email}
                  </a>
                )}
                {linkedin && (
                  <a
                    href={`https://${linkedin.replace(/^https?:\/\//, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#344054] text-sm font-semibold font-sans"
                  >
                    <LinkedInIcon />
                    {linkedin}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col items-start gap-4">
            {bioParagraphs.map((runs, index) => (
              <RichText key={index} runs={runs} size="base" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
