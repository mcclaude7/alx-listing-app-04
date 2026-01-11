export interface Address {
        state: string;
        city: string;
        country: string;
    }

export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps {
        id: string;
        name: string;
        address: Address;
        rating: number;
        category: string[];
        price: number;
        offers: Offers;
        image: string;
        discount?: string;
    }

export interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
}

export interface ReviewSectionProps {
  propertyId: string; // <--- type here
}

