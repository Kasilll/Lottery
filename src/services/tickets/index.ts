import { TicketsResult } from '../../store/tickets/types';
import request from '../request';

export interface ILoginServiceParams {
  email: string;
  password: string;
}

export const postTicketsService = async (body: TicketsResult): Promise<any> => {
  try {
    const { data } = await request().post('/rock-block', {
      data: body,
    });
    console.log(data);
    return body;
  } catch (error) {
    return error;
  }
};
