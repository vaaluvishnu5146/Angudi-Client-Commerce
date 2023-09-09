import { NextApiRequest, NextApiResponse } from "next";
import { categories } from "../../../mocks/mocks";
import type { Categories, ResponseError } from "../../../Interfaces";

export default function categoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<Categories | ResponseError>
) {
  const { query, method } = req;
  const { id } = query;
  const Categories = categories.find((p) => p.id === id);
  console.log(Categories, method);
  // User with id exists
  return Categories
    ? res.status(200).json(Categories)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
