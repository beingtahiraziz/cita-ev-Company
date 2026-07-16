import { use } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/products/ProductDetail";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
