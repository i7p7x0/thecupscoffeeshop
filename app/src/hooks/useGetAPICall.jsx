import { React,useEffect } from "react";

export default function useGetAPICall(route, setData, setResponseLoaded) {
  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/" + route + "/"
      );
      const responseData = await response.json();
      if (mounted) {
        setData(responseData);
        setResponseLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);
}
