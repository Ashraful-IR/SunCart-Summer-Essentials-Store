import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="relative overflow-hidden border-t border-orange-100 bg-linear-to-br from-slate-950 via-slate-900 to-stone-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.1),transparent_35%)]"></div>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:py-16">
        <nav className="space-y-4 sm:space-y-5">
          <h6 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300 footer-title">
            Services
          </h6>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Branding
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Design
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Marketing
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Advertisement
          </Link>
        </nav>
        <nav className="space-y-4 sm:space-y-5">
          <h6 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300 footer-title">
            Company
          </h6>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            About us
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Contact
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Jobs
          </Link>
          <Link href="/" className="link link-hover block text-sm text-slate-300 transition hover:text-orange-300">
            Press kit
          </Link>
        </nav>
        <nav className="space-y-4 sm:space-y-5">
          <h6 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300 footer-title">
            Social
          </h6>
          <div className="grid grid-flow-col gap-3 sm:gap-4">
            <Link href="/" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300">
              <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link href="/" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300">
              <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link href="/" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300">
              <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default FooterPage;
