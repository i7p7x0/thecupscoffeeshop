export const AUTHENTICATION = "AUTHENTICATION";

export const authenticationAction = (isLoggedIn) => {
  return {
    type: AUTHENTICATION,
    isLoggedIn: isLoggedIn,
  };
};
