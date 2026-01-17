import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function BookingPage() {
    const router = useRouter();
    const { propertyId } = router.query; // grab propertyId from URL

    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!propertyId) return <p>Loading property info...</p>; // wait for propertyId

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/api/booking', {
                propertyId,
                name,
                email,
                checkIn,
                checkOut,
                guests,
            });
            setSuccess(true);
        } catch (err) {
            console.error('Booking failed:', err);
        } finally {
            setLoading(false);
        }
    };

    if (success) return <p>Booking successful! 🎉</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Book Your Property</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    required
                    className="border p-2 w-full"
                />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="border p-2 w-full"
                />
                <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
                <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
                <input
                    type="number"
                    min={1}
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    required
                    className="border p-2 w-full"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                >
                    {loading ? 'Booking...' : 'Book Now'}
                </button>
            </form>
        </div>
    );
}
