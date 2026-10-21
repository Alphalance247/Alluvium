"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const DARK_LOGO =
  "https://d38rkvi67t4lhi.cloudfront.net/assets/1790157404863-Logo-1.png";

// Real link data pulled from the existing mobile-dropdown/*.jsx components
// (mobileSolutionNav.jsx, mobileProductsNav.jsx, mobileResourcesNav.jsx).
// Those components render their own rich styling (images, descriptions,
// chevron icons, SCSS modules) built for inline-expand under header.jsx - not
// what this drawer's flat, text-only drill-down view needs - so only the
// titles/hrefs are reused here, not the components themselves.
const DRILL_SECTIONS = {
  solutions: {
    label: "Solutions",
    links: [
      { title: "Cloud Upgrade", href: "/cloud-upgrade" },
      { title: "Service Management", href: "/enterprise-service-management" },
      { title: "Partnerships", href: "/strategic-partnerships" },
      { title: "License Optimization", href: "/license-optimization" },
    ],
  },
  products: {
    label: "Companies",
    links: [
      {
        title: "Export & Count",
        href: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion?tab=overview&hosting=cloud",
        external: true,
      },
      {
        title: "Resource Compare",
        href: "https://marketplace.atlassian.com/apps/1223507/resource-compare-for-jira?tab=overview&hosting=cloud",
        external: true,
      },
    ],
  },
  resources: {
    label: "Resources",
    links: [
      { title: "Success Stories", href: "/success-stories" },
      { title: "Blog", href: "/blogs" },
      { title: "Whitepapers", href: "/whitepaper" },
      { title: "About us", href: "/about" },
      { title: "Contact & Support", href: "/contact-us" },
    ],
  },
};

const MENU_ORDER = ["solutions", "case-studies", "products", "resources"];

const rowClass =
  "flex w-full items-center justify-between py-3 font-sans text-base font-bold text-white";

function ContactUsButton({ onClick }) {
  return (
    <Link
      href="/contact-us"
      onClick={onClick}
      className="rounded-lg bg-default-100 px-4 py-2.5 text-center font-sans text-sm font-bold text-white transition-colors hover:bg-default-200"
    >
      Contact us
    </Link>
  );
}

export default function NavToggleDrawer({ isOpen, onClose }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset back to the main menu each time the drawer is closed, so it
  // doesn't reopen mid-drill-down next time.
  useEffect(() => {
    if (!isOpen) setActiveSection(null);
  }, [isOpen]);

  const section = activeSection ? DRILL_SECTIONS[activeSection] : null;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed left-0 top-0 z-[70] flex h-full  w-96 max-w-[90vw] flex-col gap-8 overflow-y-auto bg-secondary-900 p-8 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 pb-3 flex-none items-center justify-between border-b border-tertiary-400">
          {section ? (
            <button
              type="button"
              onClick={() => setActiveSection(null)}
              className="flex items-center gap-2.5 font-sans text-sm font-semibold text-white/90"
            >
              <FaChevronLeft size={14} />
              Back to menu
            </button>
          ) : (
            <Image
              src={DARK_LOGO}
              alt="Alluvium logo"
              width={134}
              height={26}
            />
          )}
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="text-white"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {section ? (
          <nav className="flex flex-col gap-1">
            {section.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={onClose}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={rowClass}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        ) : (
          <nav className="flex flex-col gap-1">
            {MENU_ORDER.map((key) =>
              key === "case-studies" ? (
                <Link
                  key={key}
                  href="/success-stories"
                  onClick={onClose}
                  className={rowClass}
                >
                  Case studies
                </Link>
              ) : (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSection(key)}
                  className={rowClass}
                >
                  {DRILL_SECTIONS[key].label}
                  <FaChevronRight size={14} className="text-white/60" />
                </button>
              ),
            )}
          </nav>
        )}

        <ContactUsButton onClick={onClose} />
      </aside>
    </>
  );
}
