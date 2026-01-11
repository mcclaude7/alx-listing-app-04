import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="h-48 bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{property.name}</h3>
          <span className="text-sm text-gray-600">
            {property.rating.toFixed(2)} ★
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {property.address.city}, {property.address.country}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">${property.price}</div>
            {property.discount && (
              <div className="text-sm text-green-600">
                {property.discount}% off
              </div>
            )}
          </div>

          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md">
            View
          </button>
        </div>
      </div>
    </article>
  );
}
