
import Link from "next/link";
import { ArrowRight, ShoppingBasket, TrendingUp, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-green-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            বাংলাদেশের দৈনিক বাজার দর
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            আজকের বাজারের
            <span className="block text-green-600">
              সঠিক দাম জানুন
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            চাল, ডাল, তেল, সবজি, মাছ, মাংসসহ নিত্যপ্রয়োজনীয়
            পণ্যের সর্বশেষ বাজার দর এক জায়গায় দেখুন।
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="#সব-পণ্য"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              সব পণ্যের দাম দেখুন
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-gray-600 lg:justify-start">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-green-600" />
              দৈনিক আপডেট
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-green-600" />
              বাংলাদেশের বাজার
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <ShoppingBasket size={25} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      আজকের বাজার
                    </p>
                    <p className="text-sm text-gray-500">
                      সর্বশেষ পণ্যের দাম
                    </p>
                  </div>
                </div>

                <TrendingUp size={24} className="text-green-600" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-3xl">🍚</p>
                  <p className="mt-2 font-semibold text-gray-800">চাল</p>
                  <p className="mt-1 text-sm text-green-600">৳ ৭৫ / কেজি</p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-3xl">🫘</p>
                  <p className="mt-2 font-semibold text-gray-800">ডাল</p>
                  <p className="mt-1 text-sm text-green-600">৳ ১২০ / কেজি</p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-3xl">🛢️</p>
                  <p className="mt-2 font-semibold text-gray-800">তেল</p>
                  <p className="mt-1 text-sm text-green-600">৳ ১৮০ / লিটার</p>
                </div>

                <div className="rounded-2xl border border-gray-100 p-4">
                  <p className="text-3xl">🥬</p>
                  <p className="mt-2 font-semibold text-gray-800">সবজি</p>
                  <p className="mt-1 text-sm text-green-600">আজকের দাম</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
