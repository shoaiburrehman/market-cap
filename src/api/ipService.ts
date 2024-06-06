import axios from 'axios';
import { IpInfo } from '../utils/types';

export const fetchIpInfo = async (ipAddress: string = ''): Promise<IpInfo> => {
  const url = ipAddress ? `https://ipwho.is/${ipAddress}` : 'https://ipwho.is/';
  const response = await axios.get<IpInfo>(url);
  return response.data;
};
