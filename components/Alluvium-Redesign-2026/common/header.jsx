// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import styles from "../../../styles/AlluviumRedesign2026/common/navigation.module.scss";
// import SolutionNav from "./dropdown/solutionNav";
// import Link from "next/link";
// import ResourcesNav from "./dropdown/resourcesNav";
// import ProductNav from "./dropdown/productNav";
// import { GoChevronDown } from "react-icons/go";
// import { IoMdClose, IoMdMenu } from "react-icons/io";
// import MobileSolutionNav from "./mobile-dropdown/mobileSolutionNav";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
// import MobileProductsNav from "./mobile-dropdown/mobileProductsNav";
// import MobileResourcesNav from "./mobile-dropdown/mobileResourcesNav";
// import Image from "next/image";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const navRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 770);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   const toggleMobileDropdown = (name) => {
//     setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
//   };

//   const handleMouseEnter = (name) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveDropdown(name);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 31150);
//   };

//   return (
//     <>
//       {isMobile ? (
//         <nav className={styles.mobileInnerNav}>
//           <div className={styles.logo}>
//             <Link href="/">
//               <Image
//                 width={150}
//                 height={50}
//                 src="/assets/alluvium-logo-dark.svg"
//                 alt="Alluvium logo"
//               />
//             </Link>
//           </div>
//           <button
//             className={styles.menuBarButton}
//             onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//           >
//             {isMobileDropdownOpen ? (
//               <IoMdClose className={styles.menubar} />
//             ) : (
//               <IoMdMenu className={styles.menuClose} />
//             )}
//           </button>
//           {isMobileDropdownOpen && (
//             <div className={styles.mobileMenuLinks}>
//               <div
//                 onClick={() => toggleMobileDropdown("solutions")}
//                 className={styles.mobileNav_button}
//               >
//                 <div className={styles.navItemTitle}>Solutions</div>
//                 <div>
//                   {activeMobileDropdown === "solutions" ? (
//                     <FaChevronUp className={styles.mobileDropdownIcon} />
//                   ) : (
//                     <FaChevronDown className={styles.mobileDropdownIcon} />
//                   )}
//                 </div>
//               </div>
//               {activeMobileDropdown === "solutions" && <MobileSolutionNav />}
//               <div
//                 onClick={() => toggleMobileDropdown("products")}
//                 className={styles.mobileNav_button}
//               >
//                 <div className={styles.navItemTitle}>Products</div>
//                 <div>
//                   {activeMobileDropdown === "" ? (
//                     <FaChevronUp className={styles.mobileDropdownIcon} />
//                   ) : (
//                     <FaChevronDown className={styles.mobileDropdownIcon} />
//                   )}
//                 </div>
//               </div>
//               {activeMobileDropdown === "products" && <MobileProductsNav />}
//               <div
//                 onClick={() => toggleMobileDropdown("resources")}
//                 className={styles.mobileNav_button}
//               >
//                 <div className={styles.navItemTitle}>Resources</div>
//                 <div>
//                   {activeMobileDropdown === "" ? (
//                     <FaChevronUp className={styles.mobileDropdownIcon} />
//                   ) : (
//                     <FaChevronDown className={styles.mobileDropdownIcon} />
//                   )}
//                 </div>
//               </div>
//               {activeMobileDropdown === "resources" && <MobileResourcesNav />}
//               <Link href="/contact-us">
//                 <p className={styles.contactUs}>Contact Us</p>
//               </Link>
//             </div>
//           )}
//         </nav>
//       ) : (
//         <nav className={styles.navWrapper} ref={navRef}>
//           <div className={styles.innerNav}>

//             <div className={styles.logo}>
//               <Link href="/">
//                 <Image
//                   width={150}
//                   height={50}
//                   src="/assets/alluvium-logo-dark.svg"
//                   alt="Alluvium logo"
//                 />
//               </Link>
//             </div>

//             <div className={styles.menuLinks}>
//               <div className={styles.navItemContainer}>
//                 <div
//                   className={`${styles.navItem} ${activeDropdown === "solutions" ? styles.active : ""}`}
//                   onClick={() => toggleDropdown("solutions")}
//                 >
//                   SOLUTIONS
//                   <GoChevronDown width={16} />
//                 </div>
//                 {activeDropdown === "solutions" && <SolutionNav />}
//               </div>

//               <div className={styles.navItemContainer}>
//                 <div
//                   className={`${styles.navItem} ${activeDropdown === "products" ? styles.active : ""}`}
//                   onClick={() => toggleDropdown("products")}
//                 >
//                   PRODUCTS
//                   <GoChevronDown width={16} />
//                 </div>
//                 {activeDropdown === "products" && <ProductNav />}
//               </div>

//               <div className={styles.navItemContainer}>
//                 <div
//                   className={`${styles.navItem} ${activeDropdown === "resources" ? styles.active : ""}`}
//                   onClick={() => toggleDropdown("resources")}
//                 >
//                   RESOURCES
//                   <GoChevronDown width={16} />
//                 </div>
//                 {activeDropdown === "resources" && <ResourcesNav />}
//               </div>
//             </div>

//             <div className={styles.actions}>
//               <Link href="/contact-us">
//                 <button className={styles.btnContact}>CONTACT US</button>
//               </Link>
//             </div>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useState, useRef, useEffect } from "react";
// import styles from "../../../styles/AlluviumRedesign2026/common/navigation.module.scss";
import SolutionNav from "./dropdown/solutionNav";
import Image from "next/legacy/image";
import Link from "next/link";
import ResourcesNav from "./dropdown/resourcesNav";
import ProductNav from "./dropdown/productNav";
import { GoChevronDown } from "react-icons/go";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import MobileSolutionNav from "./mobile-dropdown/mobileSolutionNav";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import MobileProductsNav from "./mobile-dropdown/mobileProductsNav";
import MobileResourcesNav from "./mobile-dropdown/mobileResourcesNav";
import Button from "./button";
import { usePathname } from "next/navigation";
// import PartnersNav from "./dropdown/partnersNav";
// import MobilePartnerNav from "./mobile-dropdown/mobilePartnerNav";

const Navbar = ({ heroTheme = "light" }) => {
  // Track which dropdown is currently open
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  // const [isMobile, setIsMobile] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const isDarkHero = heroTheme === "dark";
  const pathname = usePathname();

  const isCaseStudiesActive = pathname === "/case-studies";
  const isDisabled = (name) =>
    activeDropdown !== null && activeDropdown !== name;
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 770);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  // Close dropdown if user clicks outside the navbar

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (navRef.current && !navRef.current.contains(event.target)) {
  //       setActiveDropdown(null);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  const navText = isDarkHero ? "text-white" : "text-[#344054]";
  const navBg = isDarkHero
    ? "bg-secondary-900 drop-shadow-[#1012180A]"
    : "bg-white/90";
  const navLogoSrc = isDarkHero ? "https://d38rkvi67t4lhi.cloudfront.net/assets/1790157404863-Logo-1.png" : "https://d38rkvi67t4lhi.cloudfront.net/assets/1790087627325-Alluvium-Logo.png"

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };


  // const handleMouseEnter = (name) => {
  //   if (activeDropdown && activeDropdown !== name) return;

  //   setActiveDropdown(name);
  // };

  // const handleMouseLeave = () => {
  //   setActiveDropdown(null);
  // };

  return (
    <>
      {/* {isMobile ? ( */}
      <div className="block lg:hidden">
        <nav className={`w-full h-20 ${navBg} backdrop-blur-md border-b border-zinc-300 flex items-center justify-between relative top-0 z-[1000] px-6`}>
          <div className="relative flex h-6 w-28 cursor-pointer items-center">
            <Link href="/">
              <Image
                width={134}
                height={26}
                src={navLogoSrc}
                alt="Alluvium logo"
              />
            </Link>
          </div>

          <div className="flex justify-between gap-4 items-center ">

            <div
              className="outline-none bg-none border-none"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              {isMobileDropdownOpen ? (
                <IoMdClose className={`w-6 h-6 ${isDarkHero ? "text-white" : "text-[#344054]"
                  }`} />
              ) : (
                <IoMdMenu className={`w-6 h-6 ${isDarkHero ? "text-white" : "text-[#667085]"}`} />
              )}
            </div>
          </div>
          {/* 
            <Link href="/contact-us" className="">
              <p className="py-2 px-3.5 text-white font-bold bg-default-100 w-full rounded-[6px] h-[44px]flex justify-center items-center font-manrope ">Contact Us</p>
            </Link>
            <button
              className="outline-none bg-none border-none"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              {isMobileDropdownOpen ? (
                <IoMdClose className="w-6 h-6 text-[#344054]" />
              ) : (
                <IoMdMenu className="w-6 h-6 text-[#667085]" />
              )}
            </button>
          </div> */}
          {isMobileDropdownOpen && (
            // <div className={styles.mobileMenuLinks}>
            <div className={`absolute left-0 top-20 z-50 w-full px-3 py-6 shadow-lg border-t
               ${isDarkHero
                ? "bg-secondary-900 border-white/10 w-full"
                : "bg-white border-zinc-200"
              }`
            }>
              {/* Mobile Menu Items */}
              <div
                onClick={() => toggleMobileDropdown("solutions")}
                className="flex h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[0.4rem] text-base"
              >
                <div className={`uppercase text-sm font-semibold leading-6 flex items-center font-manrope ${isDarkHero ? "text-white" : "text-[#595959]"
                  }`}>
                  Solutions
                </div>
                <div>
                  {activeMobileDropdown === "solutions" ? (
                    <FaChevronUp className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  ) : (
                    <FaChevronDown className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  )}
                </div>
              </div>

              {activeMobileDropdown === "solutions" && <MobileSolutionNav />}
              {/* <div
                onClick={() => toggleMobileDropdown("partners")}
                className="flex h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[0.4rem] text-base"
              >
                <div className="uppercase text-sm font-semibold leading-6 text-[#595959] flex items-center">
                  Partners
                </div>
                <div>
                  {activeMobileDropdown === "partners" ? (
                    <FaChevronUp className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  ) : (
                    <FaChevronDown className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  )}
                </div>
              </div>
              {activeMobileDropdown === "partners" && <MobilePartnerNav />} */}
              <Link
                href="/success-stories"
                className="flex h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[0.4rem] text-base"
              >
                <div className={`uppercase text-sm font-semibold leading-6  flex items-center font-manrope ${isDarkHero ? "text-white" : "text-[#595959]"}`}>
                  Case Studies
                </div>

              </Link>

              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[0.4rem] text-base"
              >
                <div className={`uppercase text-sm font-semibold leading-6  flex items-center font-manrope ${isDarkHero ? "text-white" : "text-[#595959]"}`}>
                  Company
                </div>
                <div>
                  {activeMobileDropdown === "products" ? (
                    <FaChevronUp className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  ) : (
                    <FaChevronDown className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  )}
                </div>
              </div>

              {activeMobileDropdown === "products" && <MobileProductsNav />}
              <div
                onClick={() => toggleMobileDropdown("resources")}
                className="flex h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[0.4rem] text-base"
              >
                <div className={`uppercase text-sm font-semibold leading-6 text-[#595959] flex items-center font-manrope ${isDarkHero ? "text-white" : "text-[#595959]"}`}>
                  Resources
                </div>
                <div>
                  {activeMobileDropdown === "resources" ? (
                    <FaChevronUp className={` w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"}`} />
                  ) : (
                    <FaChevronDown className={`w-5 h-5 ${isDarkHero ? "text-white" : "text-[#667085]"
                      }`} />
                  )}
                </div>
              </div>

              {activeMobileDropdown === "resources" && <MobileResourcesNav />}
              {/* <Link href="/contact-us">
                <p className={styles.contactUs}>Contact Us</p>
              </Link> */}
              {/* <Button
                className="flex justify-between gap-4 items-center bg-default-100 "
                type="button" */}
              {/* // size="sm" */}
              {/* > */}
              <Link href="/contact-us" className="bg-default-100 px-4 py-2.5 rounded-lg text-sm  flex justify-center items-center text-white font-bold font-sans">
                {/* <p className=" text-white font-bold  font-sans "> */}
                Contact Us
                {/* </p> */}
              </Link>
              {/* </Button> */}
            </div>

          )}
        </nav>
      </div>
      {/* ) : ( */}
      <div className="hidden lg:block">
        <nav
          className={`sticky top-0 z-[1000] flex h-20 w-full justify-center border-b border-dashed backdrop-blur-md transition-colors duration-300 ${navBg}`}
          ref={navRef}
        >
          <div className="w-full max-w-7xl h-full flex items-center justify-between px-5 lg:px-[62px]">
            {/* Logo Section */}

            <div className="relative flex items-center cursor-pointer">
              <Link href="/">
                <Image
                  width={134}
                  height={26}
                  src={navLogoSrc}
                  alt="Alluvium logo"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex  gap-2">
              {/* SOLUTIONS - Triggering the real component */}
              <div className="group">
                <div
                  onClick={() => toggleDropdown("solutions")}
                  // onMouseEnter={() => {
                  //   handleMouseEnter("solutions");
                  // }}
                  className={`py-2 px-3 rounded-[8px] flex items-center gap-2 cursor-pointer text-base font-bold tracking-tighter transition-all duration-200 ease-in-out ${navText} font-manrope

                      ${activeDropdown === "solutions" ? "group-hover:text-default-100 text-default-100" : ""}`}
                //  ${isDisabled("solutions") ? "pointer-events-none opacity-20 cursor-default" : ""}

                // onClick={() => {
                //   if (!isDisabled("solutions")) {
                //     toggleDropdown("solutions");
                //   }
                // }}
                >
                  Solutions
                  <GoChevronDown
                    width={20}
                    className={`transition-transform duration-300 ${activeDropdown === "solutions"
                      ? "group-hover:rotate-180  rotate-180"
                      : ""
                      }`}
                  />
                </div>
                {activeDropdown === "solutions" && (
                  <div
                  // onMouseLeave={handleMouseLeave}
                  >
                    <SolutionNav />
                  </div>
                )}
              </div>
              {/*PARTNERS - placeholder */}
              {/* <div className="group">
                <div
                  onMouseEnter={() => handleMouseEnter("partners")}
                  className={`py-2 px-3 rounded-[8px] flex items-center gap-2 cursor-pointer text-base font-bold tracking-tighter transition-all duration-200 ease-in-out ${navText} font-manrope ${activeDropdown === "partners" ? "group-hover:text-default-100 text-default-100" : ""} ${isDisabled("partners") ? "pointer-events-none opacity-20 cursor-default" : ""}`}
                
                >
                  Partners
                  <GoChevronDown
                    width={20}
                    className={`transition-transform duration-300 ${activeDropdown === "partners"
                      ? "group-hover:rotate-180 text-default-100 rotate-180"
                      : ""
                      }`}
                  />
                </div>
                {activeDropdown === "partners" && (
                  <div onMouseLeave={handleMouseLeave}>
                    <PartnersNav />
                  </div>
                )}
              </div> */}
              {/*CASE STUDIES */}
              <div
                className=""
                onClick={() => setIsActive(isActive == true)}
              // onMouseEnter={() => handleMouseEnter("caseStudies")}
              >
                <Link
                  href="/success-stories"
                  // onMouseLeave={handleMouseLeave}

                  className={` rounded-[8px] py-2 px-3  flex items-center gap-2 cursor-pointer text-base font-bold tracking-tighter transition-all duration-200 ease-in-out font-manrope ${navText} ${isCaseStudiesActive
                    ? "text-default-100"
                    : navText
                    }`}
                //  ${isDisabled("caseStudies") ? "pointer-events-none opacity-20 cursor-default" : ""}
                // onClick={() => {
                //   if (!isDisabled("caseStudies")) {
                //     toggleDropdown("caseStudies");
                //   }
                // }}
                >
                  Case studies
                  {/* <div className={styles.chevron} /> */}
                  {/* <GoChevronDown width={16} /> */}
                </Link>
              </div>
              {/* PRODUCTS - Placeholder */}
              <div className="group">
                <div
                  onClick={() => toggleDropdown("products")}
                  // onMouseEnter={() => handleMouseEnter("products")}
                  className={` rounded-[8px] py-2 px-3  flex items-center gap-2 cursor-pointer text-base font-bold tracking-tighter transition-all duration-200 ease-in-out  ${navText} font-manrope ${activeDropdown === "products" ? "group-hover:text-default-100 text-default-100" : ""}`}
                //  ${isDisabled("products") ? "pointer-events-none opacity-20 cursor-default" : ""}
                // onClick={() => {
                //   if (!isDisabled("products")) {
                //     toggleDropdown("products");
                //   }
                // }}
                >
                  Company
                  {/* <div className={styles.chevron} /> */}
                  <GoChevronDown
                    width={20}
                    className={`transition-transform duration-300 ${activeDropdown === "products"
                      ? "group-hover:rotate-180  rotate-180"
                      : ""
                      }`}
                  />
                </div>
                {activeDropdown === "products" && (
                  <div
                  // onMouseLeave={handleMouseLeave}
                  >

                    <ProductNav />
                  </div>
                )}
              </div>

              {/* RESOURCES - Placeholder */}
              <div className="group">
                <div
                  onClick={() => toggleDropdown("resources")}
                  // onMouseEnter={() => handleMouseEnter("resources")}
                  className={` rounded-[8px] py-2 px-3  flex items-center gap-2 cursor-pointer text-base font-bold tracking-tighter transition-all duration-200 ease-in-out font-manrope ${navText} ${activeDropdown === "resources" ? "group-hover:text-default-100 text-default-100" : ""}`}
                //  ${isDisabled("resources") ? "pointer-events-none opacity-20 cursor-default" : ""}
                // onClick={() => {
                //   if (!isDisabled("resources")) {
                //     toggleDropdown("resources");
                //   }
                // }}
                >
                  Resources
                  {/* <div className={styles.chevron} /> */}
                  <GoChevronDown
                    width={20}
                    className={`transition-transform duration-300 ${activeDropdown === "resources"
                      ? "group-hover:rotate-180  rotate-180"
                      : ""
                      }`}
                  />
                </div>
                {activeDropdown === "resources" && (
                  <div
                  // onMouseLeave={handleMouseLeave}
                  >
                    <ResourcesNav />
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            {/* <div className="">
              <Link href="/contact-us">
                <button className={styles.btnContact}>CONTACT US</button>
              </Link>
            </div> */}
            <Button
              className="flex justify-between gap-4 items-center  bg-default-100"
              type="button"
              size="sm"
            >
              <Link href="/contact-us" className="">
                <p className=" text-white font-bold   flex justify-center items-center font-manrope ">
                  Contact Us
                </p>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
      {/* )} */}
    </>
  );
};

export default Navbar;
