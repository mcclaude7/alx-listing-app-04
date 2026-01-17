import axios from 'axios';
import { useEffect, useState } from 'react';
import PropertyCard from '@/components/property/PropertyCard'; // Assume this component exists
import { PropertyProps } from '@/interfaces';
import Link from 'next/link';

export default function Home() {
    const [properties, setProperties] = useState<PropertyProps[]>([]);

    // const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('/api/properties');
                // const response = await axios.get("https://my-real-estate-api.com/properties");
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {properties.map(property => (
                <Link key={property.id} href={`/property/${property.id}`}>
                    <PropertyCard property={property} />
                </Link>
            ))}
        </div>
    );
}
