import type { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard/ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
  id?: string;
}

export default function ProductSection({
  title,
  products,
  id,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {title}
            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-green-600" />
          </div>

          <span className="hidden text-sm text-gray-500 sm:block">
            {products.length} টি পণ্য
          </span>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed bg-gray-50 py-16 text-center">
            <p className="text-gray-500">
              কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}