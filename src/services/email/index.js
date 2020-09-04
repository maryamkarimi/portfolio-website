import { getApiUrl, handleError } from '../index';

export const sendEmail = (body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  console.log(JSON.stringify(body));
  return fetch(`${getApiUrl()}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...body }),
    }).then(handleError);
};
