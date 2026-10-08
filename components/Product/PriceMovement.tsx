
"use client";

import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

export default function PriceMovement() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch {
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  const risers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => Number(b.change.pct) - Number(a.change.pct))
    .slice(0, 6);

  const fallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => Number(b.change.pct) - Number(a.change.pct))
    .slice(0, 6);

  if (!products.length) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
        {risers.length > 0 && (
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <TrendingUp size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  আজ দাম বেড়েছে ▲
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  আজ সবচেয়ে বেশি দাম বেড়েছে এমন পণ্য
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {risers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {fallers.length > 0 && (
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <TrendingDown size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  আজ দাম কমেছে ▼
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  আজ সবচেয়ে বেশি দাম কমেছে এমন পণ্য
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fallers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
