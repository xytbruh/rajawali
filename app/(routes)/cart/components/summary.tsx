"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("something went wrong");
    }
  }, [searchParams, removeAll]);

  // const totalPrice = items.reduce((total, item) => {
  //   return total + Number(item.price);
  // }, 0);

  const product = items.map((item) => {
    return item.name;
  });
  // const onCheckout = async () => {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
  //     {
  //       productIds: items.map((item) => item.id),
  //     }
  //   );
  //   window.location = response.data.url;
  // };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="my-6 space-y-4">
        {/* <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div> */}
        <Button
          disabled={items.length === 0}
          className="w-full mt-6"
          onClick={() =>
            router.push(
              `https://wa.me/6281779066855/?text=hi%20admin%2C%0Asaya%20ingin%20memesan%20website%0A${product}`
            )
          }
        >
          Checkout Via Wa
        </Button>
      </div>
    </div>
  );
};

export default Summary;
