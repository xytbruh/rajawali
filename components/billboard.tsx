import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {/* <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      /> */}
      <Image
        height="1000"
        width="1000"
        priority
        alt="billboard"
        src={data?.imageUrl}
        className="w-full h-auto rounded-xl relative  md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
      />
    </div>
  );
};

export default Billboard;
