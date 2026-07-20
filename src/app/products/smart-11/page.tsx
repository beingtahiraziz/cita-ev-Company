import { redirect } from "next/navigation";

// Smart 11 has been removed from the catalog.
// This route redirects to the products index so no build/runtime error occurs.
// To fully remove it, delete this folder locally: `git rm -r src/app/products/smart-11`
export default function Page() {
  redirect("/products");
}
