import axios from "axios";

const BASE_URL = "http://localhost:3007";

export const login = async (loginData: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, loginData);
  return response;
};

export const register = async (registerData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${BASE_URL}/users/register`, registerData);
  return response;
};
