
"use client";

import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { Product } from "@/types/product";

export default function PriceTicker() {
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

  if (!products.length) {
    return null;
  }

  const tickerProducts = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-orange-100 bg-orange-50 text-black-700">
      <div className="flex min-w-max animate-[ticker_55s_linear_infinite]">
        {tickerProducts.map((product, index) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-2 border-r border-orange-100 px-5 py-2.5 text-sm font-normal"
            >
              <span className="text-base">
                {product.categoryIcon}
              </span>

              <span className="font-medium text-gray-700">
                {product.nameBn}
              </span>

              <span className="font-semibold text-gray-900">
                ৳{product.today}/{product.unit}
              </span>

              {isUp && (
                <span className="flex items-center gap-1 font-medium text-red-600">
                  <TrendingUp size={14} />
                  ▲ {product.change.pct}%
                </span>
              )}

              {isDown && (
                <span className="flex items-center gap-1 font-medium text-green-600">
                  <TrendingDown size={14} />
                  ▼ {product.change.pct}%
                </span>
              )}

              {!isUp && !isDown && (
                <span className="font-medium text-gray-500">
                  — ০.০%
                </span>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes ticker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
