
import Image from "next/image";
import { CardProps } from "../../interfaces";

export default function Card({ imageSrc, title }: CardProps) {
  return (
    <div className="w-64 bg-white shadow rounded overflow-hidden">
      <Image src={imageSrc} alt={title} width={250} height={150} />
      <h3 className="p-4 font-semibold text-lg">{title}</h3>
    </div>
  );
}
