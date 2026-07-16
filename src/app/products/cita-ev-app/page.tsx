import type { Metadata } from "next";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProductBySlug } from "@/data/products";

const product = getProductBySlug("cita-ev-app")!;

export const metadata: Metadata = {
  title: `${product.name} | CITA EV Chargers Pakistan`,
  description: product.heroSubheadline,
};

export default function Page() {
  return <ProductDetail product={product} />;
}
