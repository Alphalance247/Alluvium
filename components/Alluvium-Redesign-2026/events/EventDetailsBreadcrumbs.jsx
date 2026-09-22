import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ items }) => {
    if (!items?.length) return null;

    return (
        <nav aria-label="Breadcrumb" className=" pb-14">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-manrope">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const label = isLast
                        ? item.label.split(".")[0].trim()
                        : item.label;
                    return (
                        <li key={index} className="flex items-center gap-1.5">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-[#E37915] font-bold "
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={isLast ? "text-white/90 font-medium" : "text-[#E37915]"}>
                                    {label}
                                </span>
                            )}
                            {!isLast && <span className="text-white/30">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;