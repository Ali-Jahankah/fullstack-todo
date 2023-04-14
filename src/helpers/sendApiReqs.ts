type Methods = 'Get' | 'Post' | 'Put' | 'Delete';

const correctReq = (
  method: Methods,
  data: unknown,
): RequestInit => {
  if (method === 'Get') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
export const sendRequest = async <T>(
  url: string,
  method: Methods,
  data: unknown = {},
): Promise<T> => {
  const res = await fetch(url, correctReq(method, data));
  if (!res.ok) {
    const message = 'An error has occured! ' + res.status;
    throw new Error(message);
  }
  return (await res.json()) as Promise<T>;
};
