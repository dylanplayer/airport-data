import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/topRoutes.json';
import FlightType from '../../types/FlightType';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<FlightType[]>
) => {
  res.status(200).json(data as FlightType[]);
}

export default handler;
