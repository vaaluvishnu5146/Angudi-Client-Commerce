import { NextApiRequest, NextApiResponse } from "next";
import { food } from "../../../mocks/mocks";
import type { foodType, ResponseError } from "../../../Interfaces";

export default function foodHandler(
  req: NextApiRequest,
  res: NextApiResponse<Array<foodType> | ResponseError>
) {
  const { query, method } = req;
  const { id } = query;
  return res.status(200).json(food);
}
