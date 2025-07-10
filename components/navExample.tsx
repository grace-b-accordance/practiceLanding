//! * ? TODO: 
"use client"; //pathname is not available in server components

import Image from "next/image";
import Link from "next/link";
import {
  CloseOutlined,
  LinkedinFilled,
  MenuOutlined,
  XOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import ContactButton from "./ContactButton"; 
import { useState } from "react";

const NAV_LINKS = [
  { href: "/security", label: "Security" },
  { href: "/press", label: "Press" },
  {
    href: "https://app.dover.com/jobs/accordance",
    label: "Careers",
    external: true,
  },
];

const GradientDivider = () => (
  <div
    className="w-full h-[1px]"
    style={{
      background:
        "linear-gradient(to left, transparent, rgba(var(--color-third-rgb), 0.3) 50%, transparent)",
    }}
  />
);

//* finally getting to the actual component

export default function Navigation({ children }) {  
  //* when assembling, the children is the page content. Navigation wraps the whole page content. 
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full">
        <div className="sticky top-0 z-10 w-full backdrop-blur-lg">
          <div className="flex items-center justify-between mx-auto">
            <Link
              href="/"
              className="pl-5 md:absolute md:left-1/2 md:-translate-x-1/2"
              onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
            >
              <Image
                src="/accordance.svg"
                className="h-auto cursor-pointer pointer-events-none w-30 md:w-42 xl:w-50 user-select-none z-1"
                width={400}
                height={60}
                alt="Accordance"
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 m-3 md:hidden"
              aria-label="Toggle menu"
            >
              <div
                className="absolute inset-0 mt-1 transition-all duration-300 transform"
                style={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: isMobileMenuOpen
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}
              >
                <MenuOutlined
                  style={{ color: "var(--color-second)", fontSize: "20px" }}
                />
              </div>
              <div
                className="absolute inset-0 mt-1 transition-all duration-300 transform"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                }}
              >
                <CloseOutlined
                  style={{ color: "var(--color-second)", fontSize: "20px" }}
                />
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="items-center justify-between hidden overflow-visible md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.external && {
                    rel: "noopener noreferrer",
                    target: "_blank",
                  })}
                >
                  <div className="cursor-pointer top-bar-buttons group/buttons py-[30px] px-[30px] pb-0">
                    <div
                      className={`text-sm ${
                        pathname === link.href
                          ? "text-third"
                          : "text-second-light group-hover/buttons:text-second"
                      }`}
                    >
                      {link.label}
                    </div>
                    <div className="h-[1px] w-[200%] -mb-[1px] mt-5 top-bar-button-underline hover:after:opacity-100 after:opacity-0 -translate-x-1/4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Login Button - Hidden on mobile */}
            <Link
              className="hidden md:flex"
              href="https://app.accordance.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="cursor-pointer top-bar-buttons group/login py-[30px] px-[30px] pb-0">
                <div className="text-sm text-second-light group-hover/login:text-second">
                  Log in
                </div>
                <div className="h-[1px] w-[200%] -mb-[1px] mt-5 top-bar-button-underline hover:after:opacity-100 after:opacity-0 -translate-x-1/4" />
              </div>
            </Link>
            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 w-full md:hidden mt-14 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="h-full z-9">
                <div className="flex flex-col w-full py-5 mt-[1px] space-y-6 bg-primary">
                  {[
                    ...NAV_LINKS,
                    {
                      href: "https://app.accordance.com",
                      label: "Log in",
                      external: true,
                    },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={toggleMobileMenu}
                      {...(link.external && {
                        rel: "noopener noreferrer",
                        target: "_blank",
                      })}
                    >
                      <div className="pl-5 text-xl text-second hover:text-third">
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <GradientDivider />
        </div>

        {/* Main Content */}
        <div className="min-h-screen">{children}</div>
      </div>

      {/* Footer */}
      <div className="container w-full pt-8">
        <GradientDivider />
        <div className="flex flex-col justify-between px-2 pt-6 mx-auto md:px-15 md:items-start md:flex-row">
          <div className="pb-5 mx-auto md:pb-0 md:mx-0 md:mr-auto">
            <Link href="/">
              <Image
                src="/accordance.svg"
                width={154}
                height={25}
                alt="Accordance"
                style={{
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </Link>
          </div>

          <div className="flex flex-row pt-4 mx-auto text-sm md:mx-0 md:pt-2 text-second hover:cursor-pointer gap-x-22 md:gap-x-4">
            <div className="flex flex-col md:flex-row gap-x-16 gap-y-6 md:gap-x-4">
              {[
                {
                  href: "https://app.dover.com/jobs/accordance",
                  label: "Careers",
                  external: true,
                },
                { href: "/press", label: "Press" },
                { href: "/security", label: "Security" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.external && {
                    rel: "noopener noreferrer",
                    target: "_blank",
                  })}
                >
                  <div className="hover:cursor-pointer">{link.label}</div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-x-16 gap-y-6 md:gap-x-4">
              {[{ label: "Media" }, { label: "Sales" }].map((link) => (
                <ContactButton
                  key={link.label}
                  decorated={false}
                  {...(link.external && {
                    rel: "noopener noreferrer",
                    target: "_blank",
                  })}
                >
                  {link.label}
                </ContactButton>
              ))}
            </div>

            <div className="hidden text-second-dark md:block">|</div>
          </div>

          <div className="flex pt-6 mx-auto md:pt-1 md:mx-0 md:pl-3 gap-x-16 md:gap-x-4">
            <div className="text-second">
              <Link
                className="duration-300 transform-colors md:text-second-dark md:hover:text-second-light"
                href="https://x.com/AccordanceAI"
                rel="noopener noreferrer"
                target="_blank"
              >
                <XOutlined />
              </Link>
            </div>
            <div className="text-second">
              <Link
                className="duration-300 transform-colors md:text-second-dark md:hover:text-second-light"
                href="https://www.linkedin.com/company/AccordanceAI"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinFilled />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-24 mx-auto text-center md:flex-row md:text-left md:px-15 md:justify-between">
          <div className="pt-6 text-xs text-second-dark">
            Copyright © {new Date().getFullYear()} Agnetic Labs Inc. All rights
            reserved.
          </div>
          <div className="pt-6 text-xs text-second-dark">
            <Link href="/privacy">Privacy</Link> • <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </>
  );
}