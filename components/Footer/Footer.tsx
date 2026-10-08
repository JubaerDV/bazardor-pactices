import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <ShoppingCart size={24} />
              <span>বাজার দর</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের
              দৈনিক বাজার দর সহজে জানুন।
            </p>
          </div>

        
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
              <Link
                href="/"
                className="hover:text-white"
              >
                সব পণ্য
              </Link>

              <Link
                href="/signin"
                className="hover:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold">
              বাজার দর
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              সঠিক বাজার তথ্যের মাধ্যমে প্রতিদিনের
              কেনাকাটাকে আরও সহজ করে তোলাই আমাদের লক্ষ্য।
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} বাজার দর. All rights reserved.
        </div>
      </div>
    </footer>
  );
}