import { ErrorHandler } from '@/sharedComponents/ErrorHandler/ErrorHandler';

export const baseUrl = (path: string): string => {
  return `${process.env.API_KEY}/${path}`;
};
const parseResponse = async (response: any): Promise<Response> => {
  if (response.status > 299) {
    throw new Error(response.status);
  }
  return response;
};

export class HTTPService {
  static get(path: string): Promise<Response> {
    return fetch(`${baseUrl(path)}`, {
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        return parseResponse(response);
      })
      .catch((e) => {
        throw new ErrorHandler(e.message);
      });
  }

  static post(path: string, requestBody: any): Promise<Response> {
    return fetch(`${baseUrl(path)}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        return parseResponse(response);
      })
      .catch((e) => {
        throw new ErrorHandler(e.message);
      });
  }

  static patch(path: string, requestBody: any): Promise<Response> {
    return fetch(`${baseUrl(path)}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: 'PATCH',
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        throw new ErrorHandler(e.message);
      });
  }
}
