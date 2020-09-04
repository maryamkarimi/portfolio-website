export const getApiUrl = () => 'https://loqx5qpci0.execute-api.us-east-1.amazonaws.com/dev/email/send';

export const handleError = (response) => {
  if (response.ok) {
    return response;
  }
  return response.json().then((error) => Promise.reject(error));
};
