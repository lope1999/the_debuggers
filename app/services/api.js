const BASE_URL = 'https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default';

export async function getFees() {
  try {
    const response = await fetch(`${BASE_URL}/fee`);
    if (!response.ok) {
      throw new Error('Failed to fetch fees');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching fees:', error);
    throw error;
  }
}

export async function getExchangeRate(from = 'USD', to = 'NGN') {
  try {
    const response = await fetch(`${BASE_URL}/exchange?from=${from}&to=${to}`);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
}