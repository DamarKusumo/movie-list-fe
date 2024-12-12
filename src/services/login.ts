import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`http://localhost:3001/api/auth/login`, {
            email,
            password,
        });

        if (response.status === 200) {
            return response.data;
        } else if (response.status === 401) {
            return "Unauthorized: Invalid email or password";
        } else {
            return `Unexpected status code: ${response.status}`;
        }
    } catch (error) {
        return `Error: ${error}`;
    }
};
