import axios from "axios";
import Cookies from "js-cookie";

const jwt = Cookies.get("@user_jwt");

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

export const addQuestion = async (question: { text: string }) => {
  const response = await axios.post(`${BASE_URL}/questions`, question, {
    headers: { Authorization: jwt },
  });
  return response;
};

export const getAllQuestions = async () => {
  const response = await axios.get(`${BASE_URL}/questions`, {
    headers: {
      Authorization: jwt,
    },
  });
  return response;
};

export const deleteQuestionById = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/questions/${id}`, {
    headers: {
      Authorization: jwt,
    },
  });
  return response;
};

// export const answerQuestion = async (answer: { id: string; text: string }) => {
//   const response = await axios.post(
//     `${BASE_URL}/answers/question/${id}`,
//     answer,
//     {
//       headers: { Authorization: jwt },
//     }
//   );
//   return response;
// };
