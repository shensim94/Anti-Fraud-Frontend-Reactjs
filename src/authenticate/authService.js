const BASE_URL = 'api/auth';

export const authenticateUser = async (username, password) => {
    const url = `${BASE_URL}/authenticate`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const responseBody = await response.json();
    if (!response.ok) {
        throw new Error(responseBody.message);
    }

    return response.json();
};

export const registerUser = async (name, username, password) => {
    const url = `${BASE_URL}/user`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
    });

    const responseBody = await response.json();
    if (!response.ok) {
        throw new Error(responseBody.message);
    }

    return responseBody;
};