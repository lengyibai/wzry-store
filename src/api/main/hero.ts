import { getReq } from "../network";

export const getAllData = () => {
  return getReq("/wzry.json");
};
