import { getCall } from "../generic/call";

export async function loginAPI(url, requestParams) {
  return await getCall(url, requestParams).then((response) => {
    if (response != null) {
      console.log(response);
    }
  });
}
