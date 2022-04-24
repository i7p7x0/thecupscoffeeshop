import { React, useEffect } from "react";

export default async function patchAPICall(route, bodyObject) {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/" + route + "/",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // authorization: token,
      },
      body: JSON.stringify(bodyObject),
    }
  );
  const responseData = await response.json();
  return responseData;
}
