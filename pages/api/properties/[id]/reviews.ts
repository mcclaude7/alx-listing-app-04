import type { NextApiRequest, NextApiResponse } from 'next';

// Define review type
interface Review {
    id: string;
    user: string;
    comment: string;
    rating: number;
}

// Store reviews in memory (reset on server restart)
let reviewsDB: Record<string, Review[]> = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // property ID
    if (typeof id !== 'string')
        return res.status(400).json({ error: 'Invalid property ID' });

    if (req.method === 'GET') {
        return res.status(200).json(reviewsDB[id] || []);
    }

    if (req.method === 'POST') {
        const { user, comment, rating } = req.body;
        if (!user || !comment || !rating) {
            return res.status(400).json({ error: 'Missing review fields' });
        }
        const newReview: Review = {
            id: Date.now().toString(),
            user,
            comment,
            rating,
        };

        if (!reviewsDB[id]) reviewsDB[id] = [];
        reviewsDB[id].push(newReview);

        return res.status(201).json(newReview);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
