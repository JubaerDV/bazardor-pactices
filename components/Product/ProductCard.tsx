
import Image from "next/image";
import Link from "next/link";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const imageUrl =
    typeof product.image === "string" &&
    (product.image.startsWith("http://") ||
      product.image.startsWith("https://"))
      ? product.image
      : null;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative flex h-48 w-full items-center justify-center bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.nameBn}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span className="text-7xl">
            {product.categoryIcon}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {product.nameBn}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {product.unit}
            </p>
          </div>

          <span className="text-2xl">
            {product.categoryIcon}
          </span>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            আজকের দাম
          </p>

          <p className="mt-1 text-2xl font-extrabold text-green-700">
            ৳{product.today}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            গতকালের তুলনায়
          </span>

          {isUp && (
            <span className="flex items-center gap-1 text-sm font-semibold text-red-600">
              <TrendingUp size={16} />
              +{product.change.pct}%
            </span>
          )}

          {isDown && (
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
              <TrendingDown size={16} />
              -{product.change.pct}%
            </span>
          )}

          {!isUp && !isDown && (
            <span className="text-sm font-semibold text-gray-500">
              অপরিবর্তিত
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
