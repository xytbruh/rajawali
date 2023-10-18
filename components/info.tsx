"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { MouseEventHandler } from "react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      {/* <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div> */}
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Styling:</h3>
          <div className="flex gap-2">
            {data.language.map((language, index) => (
              <div
                key={index}
                className="bg-black text-white py-1 px-2 text-sm rounded-md"
              >
                {language}
              </div>
            ))}
          </div>{" "}
        </div>

        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Url:</p>
          <a href={data.url} target="_blank">
            Klik Disini
          </a>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Description:</p>
          <div>{data?.description}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
