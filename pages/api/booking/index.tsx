import type { NextApiRequest, NextApiResponse } from 'next';

interface Booking {
    propertyId: string;
    name: string;
    email: string;
    checkIn: string;
    checkOut: string;
    guests: number;
}

// For now, store bookings in memory (reset on server restart)
let bookings: Booking[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const booking: Booking = req.body;
        bookings.push(booking);
        return res.status(201).json({ message: 'Booking successful!', booking });
    }

    if (req.method === 'GET') {
        // Return all bookings (for admin/testing)
        return res.status(200).json(bookings);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
