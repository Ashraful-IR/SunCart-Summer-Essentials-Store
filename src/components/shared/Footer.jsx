import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="relative overflow-hidden border-t border-orange-100 bg-linear-to-br from-slate-950 via-slate-900 to-stone-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.1),transparent_35%)]"></div>
      <div className="relative mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-4 justify-center sm:gap-6 md:gap-8 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <nav className="space-y-3 text-center sm:text-left sm:space-y-4 md:space-y-5">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-sm footer-title">
            Services
          </h6>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Branding
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Design
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Marketing
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Advertisement
          </Link>
        </nav>
        <nav className="space-y-3 text-center sm:text-left sm:space-y-4 md:space-y-5">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-sm footer-title">
            Company
          </h6>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            About us
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Contact
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Jobs
          </Link>
          <Link href="/" className="link link-hover block text-xs text-slate-300 transition hover:text-orange-300 sm:text-sm">
            Press kit
          </Link>
        </nav>
        <nav className="col-span-2 space-y-3 text-center sm:col-span-1 sm:text-left sm:space-y-4 md:space-y-5">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-sm footer-title">
            Social
          </h6>
          <div className="flex  justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 sm:flex-col">
            <Link href="/" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300 sm:h-10 sm:w-10 md:h-11 md:w-11">
              <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="/" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300 sm:h-10 sm:w-10 md:h-11 md:w-11">
              <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="/" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/50 hover:bg-orange-500/15 hover:text-orange-300 sm:h-10 sm:w-10 md:h-11 md:w-11">
              <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center sm:mt-10 sm:pt-8">
          <p className="text-xs text-slate-400 sm:text-sm">
            &copy; {new Date().getFullYear()} SunCart. All rights reserved. Made with love for summer shoppers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
