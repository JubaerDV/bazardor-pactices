
import { NextResponse } from "next/server";

const BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
