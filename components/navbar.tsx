'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="navbar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <ul className="navbar-list">
          {navItems.map(({ label, href }) => (
            <li key={href} className="navbar-item">
              <Link
                href={href}
                className={`navbar-link ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
