import { Axios } from "../../tools/axios/axiosInstance";
// import { getBotPoison } from "../../../utils/botPoison";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // const botPoison = await getBotPoison("login");

  const reqBody = {
    email: email,
    password: password,
    // "_botpoison": botPoison,
  };

  return Axios.post(`/dashboard/login/`, reqBody);
};
