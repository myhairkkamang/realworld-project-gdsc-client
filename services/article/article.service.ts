import getHeader from "@/utils/headers.utils";

export const getArticle = async (query: any) => {
  //write down API URL
  return await fetch("", {
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.article);
};
