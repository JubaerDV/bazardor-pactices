
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <section id="সব-পণ্য" className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-96 animate-pulse rounded-2xl bg-white shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="সব-পণ্য" className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-gray-500">
            কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="সব-পণ্য" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            সব পণ্যের আজকের দাম
          </h2>

          <p className="mt-2 text-gray-600">
            প্রতিদিনের বাজারের সর্বশেষ পণ্যের দাম দেখুন
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
