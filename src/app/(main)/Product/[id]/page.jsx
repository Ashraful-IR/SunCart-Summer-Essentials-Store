import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getData } from "@/lib/data";
import { Fa0 } from "react-icons/fa6";
import { FaArtstation, FaCartArrowDown, FaDraftingCompass, FaMoneyBill, FaSwatchbook } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const ProdDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return redirect(
      `/LogIn?callbackUrl=${encodeURIComponent(`/Product/${id}`)}`,
    );
  }

  const products = await getData();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <main className=" h-full px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8 md:mb-10 text-center md:text-left">
          <p className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Product Details
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Premium product spotlight
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base md:text-lg">
            Explore the full product image, essentials, and specs in one clean
            view before you add it to your cart.
          </p>
        </header>

      <div className="mx-auto h-full grid max-w-6xl overflow-hidden rounded-3xl border border-white/70   grid-cols-1 md:grid-cols-2">
        <div className="relative h-full p-6 sm:p-8 lg:p-10 lg:rounded-l-3xl lg:rounded-r-none">
          <Image
            src={product.image}
            alt={product.name}
            priority
            height={900}
            width={900}
            className="object-contain rounded-2xl shadow-lg  rotate-0 scale-100 transition-all duration-700 hover:rotate-3 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 p-2  sm:p-8 md:p-10 lg:rounded-r-3xl lg:rounded-l-none">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-sm font-medium text-gray-500">
              Brand: {product.brand}
            </p>
          </div>

          <p className="text-base leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
            <div className="rounded-2xl bg-orange-50 px-4 py-3 flex  gap-5 justify-center items-center">
              <FaMoneyBill className="w-17 h-17 text-orange-500" />
              <div className="flex flex-col justify-between items-start text-xs font-semibold uppercase tracking-wider text-orange-500">
                Price
              
              <p className="mt-1 text-2xl font-black text-gray-900">
                ${product.price}
              </p>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-50 px-4 py-3 flex  gap-5 justify-center items-center">
              <FcRating className="w-17 h-17 text-orange-500" />
              <div className="flex flex-col justify-between items-start text-xs font-semibold uppercase tracking-wider text-orange-500">
                Rating
              
              <p className="mt-1 text-2xl font-black text-gray-900">
                {product.rating} / 5
              </p>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-50 px-4 py-3 flex  gap-5 justify-center items-center">
              <FaCartArrowDown className="w-17 h-17 text-orange-500" />
              <div className="flex flex-col justify-between items-start text-xs font-semibold uppercase tracking-wider text-orange-500">
                Stock
              
              <p className="flex justify-between items-center mt-1 text-2xl font-black text-gray-900">
                {product.stock}/<span className="text-[0.625rem] text-gray-500">units</span>
              </p>
              </div>
            </div>
            
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/Product"
              className="inline-flex items-center justify-center rounded-xl border border-orange-200 px-5 py-3 font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default ProdDetailsPage;
