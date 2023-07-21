

export const hireUser = async (token, body) => {

  const request = await fetch(`${baseUrl}/departments/hire`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })

  const response = await request.json();
  return response;
}
