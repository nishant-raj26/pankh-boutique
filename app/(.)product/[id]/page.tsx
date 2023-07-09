"use client";
import ProductImage from "@/components/ProductImage";
import { Button } from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import { StarIcon, Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState<Product>();
  const id = useParams().id;

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      console.log(product);

      setProduct(product);
    }
    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
          <div className="flex gap-x-8 h-96">
            {product?.image && (
              <div className="relative w-72 h-full hidden md:inline">
                <ProductImage product={product} fill />
              </div>
            )}
            <div className="flex flex-1 flex-col  ">
              <div className="flex-1">
                <h4 className="font-semibold"> {product?.title} </h4>
                <p className="font-medium text-sm"> {product?.price} </p>

                <div className="flex items-center text-sm my-4">
                  <p>{product?.rating.rate} </p>
                  {product?.rating.rate && (
                    <div className="flex items-center ml-2 mr-6">
                      {Array.from(
                        { length: Math.floor(product.rating.rate) },
                        (_, i) => (
                          <StarIcon
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-yellow-500"
                          />
                        )
                      )}
                      {Array.from(
                        { length: 5 - Math.floor(product.rating.rate) },
                        (_, i) => (
                          <Star key={id} className=" h-4 w-4 text-yellow-500" />
                        )
                      )}
                    </div>
                  )}
                  <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                    See all {product?.rating.count} reviews
                  </p>
                </div>
                <p className="line-clamp-5 text-sm"> {product?.description} </p>
              </div>
              <div className="space-y-3  space-x-5 text-sm flex flex-col ">
                <Button className="bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black border px-5 md:px-10 py-2.5 rounded font-semibold transition duration-200 ease-out ">
                  Add to bag
                </Button>
                <Button className="bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black border px-5 md:px-10 py-2.5 rounded font-semibold transition duration-200 ease-out" onClick={() => router.push(`/product/${product?.id}`)} >
                  Veiw full detail
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
