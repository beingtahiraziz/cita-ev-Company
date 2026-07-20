import { redirect } from "next/navigation";

// This product was replaced by the PDF catalogue. Redirects to products index.
export default function Page() {
  redirect("/products");
}
