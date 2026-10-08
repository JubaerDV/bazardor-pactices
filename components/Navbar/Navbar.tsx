"use client";

import Link from "next/link";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100 bg-indigo-50 shadow-sm transition-all duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-green-700"
        >
          <ShoppingCart size={25} />
          <span>বাজার দর</span>
        </Link>

        <p className="hidden text-sm text-gray-600 md:block">
          আজকের বাজার
        </p>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/signin"
            className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-indigo-100"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            <User size={16} />
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-indigo-100 sm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-indigo-100 bg-indigo-50 px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-indigo-100"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <nav className="border-t border-indigo-100 bg-white/80">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2 text-sm sm:px-6 lg:px-8">
          <Link
            href="/"
            className="whitespace-nowrap font-semibold text-green-600 transition-colors duration-300"
          >
            সব পণ্য
          </Link>

          <Link
            href="/category/chal"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🍚 চাল
          </Link>

          <Link
            href="/category/dal"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🫘 ডাল
          </Link>

          <Link
            href="/category/tel"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🛢️ তেল
          </Link>

          <Link
            href="/category/sobji"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🥬 সবজি
          </Link>

          <Link
            href="/category/mach"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🐟 মাছ
          </Link>

          <Link
            href="/category/mangsho"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🍗 মাংস
          </Link>

          <Link
            href="/category/dim-dui"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🥛 ডিম-দুধ
          </Link>

          <Link
            href="/category/mosla"
            className="whitespace-nowrap text-gray-600 transition-colors duration-300 hover:text-green-600"
          >
            🌶️ মসলা
          </Link>
        </div>
      </nav>
    </header>
  );
}
