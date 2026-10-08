
import Link from "next/link";
import { ArrowLeft, TrendingDown, TrendingUp } from "lucide-react";

interface Product {
  id: string | number;
  slug: string;
  nameBn: string;
  nameEn?: string;
  subtitle?: string;
  category?: string;
  categoryIcon?: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
  image?: string;
  markets?: {
    name: string;
    price: number;
  }[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const products: Product[] = await response.json();

    return products.find((product) => product.slug === slug) || null;
  } catch {
    return null;
  }
}

export default async function ProductDetails({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="text-6xl">😕</div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            পণ্যটি পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-gray-500">
            আপনি যে পণ্যটি খুঁজছেন সেটি বর্তমানে পাওয়া যাচ্ছে না।
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <ArrowLeft size={18} />
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const prices =
    product.markets?.map((market) => Number(market.price)) || [
      Number(product.today),
    ];

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const averagePrice =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-600"
        >
          <ArrowLeft size={18} />
          সব পণ্যে ফিরে যান
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="flex min-h-[320px] items-center justify-center bg-green-50 p-8">
              <div className="text-center">
                <div className="text-8xl">
                  {product.categoryIcon || "🛒"}
                </div>

                <p className="mt-5 text-sm font-medium text-green-700">
                  {product.category || "পণ্য"}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {product.category || "পণ্য"}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                  {product.unit}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {product.nameBn}
              </h1>

              {product.subtitle && (
                <p className="mt-2 text-gray-500">
                  {product.subtitle}
                </p>
              )}

              <div className="mt-7 rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  আজকের দাম
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <p className="text-3xl font-extrabold text-green-700">
                    ৳{product.today}
                  </p>

                  {isUp && (
                    <span className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                      <TrendingUp size={15} />
                      ▲ {product.change.pct}%
                    </span>
                  )}

                  {isDown && (
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                      <TrendingDown size={15} />
                      ▼ {product.change.pct}%
                    </span>
                  )}

                  {!isUp && !isDown && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500">
                      — ০.০%
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border p-4 text-center">
                  <p className="text-xs text-gray-500">
                    সর্বনিম্ন
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    ৳{minPrice}
                  </p>
                </div>

                <div className="rounded-2xl border p-4 text-center">
                  <p className="text-xs text-gray-500">
                    সর্বোচ্চ
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    ৳{maxPrice}
                  </p>
                </div>

                <div className="rounded-2xl border p-4 text-center">
                  <p className="text-xs text-gray-500">
                    গড়
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    ৳{averagePrice.toFixed(0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            বিভিন্ন বাজারে {product.nameBn}-এর বর্তমান দাম
          </p>

          {product.markets && product.markets.length > 0 ? (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50 text-left">
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      বাজার
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      দাম
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      একক
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market) => (
                    <tr
                      key={market.name}
                      className="border-b last:border-0"
                    >
                      <td className="px-4 py-4 text-gray-700">
                        {market.name}
                      </td>

                      <td className="px-4 py-4 font-bold text-green-700">
                        ৳{market.price}
                      </td>

                      <td className="px-4 py-4 text-gray-500">
                        {product.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
              এই পণ্যের বাজারভিত্তিক তথ্য বর্তমানে পাওয়া যায়নি।
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
