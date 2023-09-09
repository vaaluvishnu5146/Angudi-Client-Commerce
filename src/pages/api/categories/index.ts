import { NextApiRequest, NextApiResponse } from "next";
import { categories } from "../../../mocks/mocks";
import type { Categories, ResponseError } from "../../../Interfaces";

export default function categoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Categories> | ResponseError>
) {
  return res.status(200).json(categories);
}
