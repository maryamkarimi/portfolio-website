import { getApiUrl, handleError } from '../index';

const sendEmail = (body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${getApiUrl()}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ ...body }),
    }).then(handleError);
};

export default sendEmail;
