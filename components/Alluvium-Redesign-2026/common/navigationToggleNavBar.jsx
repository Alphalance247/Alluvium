"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import Container from "./container";
import NavToggleDrawer from "./navToggleDrawer";
import Button from "./button";
import BadgeScroller from "./badgeScroller";

// Trust badges pulled directly from home/badges.jsx's logo-cloud source assets.
// "Claude Partner Network" and "Cloud Migration Specialization" are the same
// underlying files as badges.jsx, just labeled to match what's shown there.
const TRUST_BADGES = [
  {
    name: "Claude Partner Network",
    logo: "/assets/Alluvium-Redesign-2026/badges/claude-badge.svg",
    width: 104,
    height: 53,
  },
  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AT14VX9-1-1-1.png",
    width: 84,
    height: 53,
    name: "service management partner badge",
  },
  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AT14W34-1-1-1.png",
    width: 85,
    height: 53,
    name: "cloud migration partner badge",
  },
  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-AWS-1.png",
    width: 61,
    height: 59,
    name: "AWS partner badge",
  },
  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-Mask-group-2.png",
    width: 82,
    height: 52,
    name: "GDPR partner badge",
  },

  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589125-Chamber-of-commer-1.png",
    width: 106,
    height: 53,
    name: "Chamber-of-commerce partner badge",
  },
  {
    logo: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787247589124-London-of-chamber-1.png",
    width: 165,
    height: 56,
    name: "London-chamber partner badge",
  },
];

const ALLUVIUM_LOGO =
  "https://d38rkvi67t4lhi.cloudfront.net/assets/1790087627325-Alluvium-Logo.png";

export default function NavigationToggleNavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-grey-200 bg-white shadow-[0_4px_12px_0_rgba(16,18,24,0.04)]">
        <Container className="flex items-center justify-between gap-6 !py-6">
          <div className="flex items-center gap-6">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              className="text-grey-900"
            >
              <IoMdMenu size={24} />
            </button>
            <Link href="/" aria-label="Alluvium home" className="flex-none">
              <Image
                src={ALLUVIUM_LOGO}
                alt="Alluvium logo"
                width={134}
                height={26}
              />
            </Link>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={badge.name}
                className={`flex h-12 flex-none items-center justify-center `}
              >
                <Image
                  src={badge.logo}
                  alt={badge.name}
                  width={badge.width}
                  height={badge.height}
                  className="h-[53px] w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <Link href="/contact-us">
            <button className="inline-flex flex-none items-center justify-center whitespace-nowrap rounded-lg bg-default-100 px-3.5 py-2 font-sans text-sm font-bold text-white transition-colors hover:bg-default-200 lg:px-5 lg:!py-[12px] lg:text-base">
              Contact us
            </button>
          </Link>
        </Container>
        <NavToggleDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </header>
      <div className="border-b border-grey-200 bg-white py-3 xl:hidden">
        {/* <Container> */}
        <BadgeScroller badges={TRUST_BADGES} />
        {/* </Container> */}
      </div>
    </>
  );
}
