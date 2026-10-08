import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

const BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getCategory(
  category: string
): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/categories/${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  return response.json();
}