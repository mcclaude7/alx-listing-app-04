import { PropertyProps } from '@/interfaces';
import Link from 'next/link';
import ReviewSection from './ReviewSection';

interface PropertyDetailProps {
    property: PropertyProps;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-3xl font-bold">{property.name}</h1>
                    <p className="text-gray-600 mt-2">
                        {property.address.city}, {property.address.country}
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                        <span className="text-xl font-semibold">${property.price}</span>
                        <span className="text-sm text-gray-500">
                            {property.rating.toFixed(2)} ★
                        </span>
                    </div>

                    {property.discount && (
                        <p className="mt-2 text-green-600">
                            {property.discount}% discount available
                        </p>
                    )}

                    <div className="mt-6">
                        <h3 className="font-semibold text-lg">Categories</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {property.category.map(cat => (
                                <span
                                    key={cat}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold mt-6">Reviews</h2>
                        <ReviewSection propertyId={property.id} />
                    </div>

                    {/* Fixed Book Now button linking to booking page */}
                    <div className="mt-8">
                        <Link
                            href={`/booking?propertyId=${property.id}`}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-md inline-block"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
