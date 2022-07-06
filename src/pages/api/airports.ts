import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/airports.json';
import AirportType from '../../types/AirportType';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<AirportType[]>
) => {
  res.status(200).json(data as AirportType[]);
}

export default handler;
