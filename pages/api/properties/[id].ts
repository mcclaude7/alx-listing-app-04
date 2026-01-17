// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const propertyId = Number(id);
    const property = PROPERTYLISTINGSAMPLE[propertyId];

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(property);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
