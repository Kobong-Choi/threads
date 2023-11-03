"use client";

import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {/* 문자열을 공백을 기준으로 분할하고, 그 중에서 첫 번째 단어를 선택하는 것 */}
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
