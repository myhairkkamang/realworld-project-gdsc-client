import { getToken } from "./token.utils";

const getHeader = () => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Token ${token}` } : {}),
  };
};

export default getHeader;
