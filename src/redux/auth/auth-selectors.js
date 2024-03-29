export const getLogin = ({ auth }) => auth.isLogin;
export const getIsRefreshing = ({ auth }) => auth.isRefreshing;
export const getLoading = ({ auth }) => auth.isLoading;
export const getUserName = ({ auth }) => auth.user.username;
export const getSid = ({ auth }) => auth.sid;
export const getAccessToken = ({ auth }) => auth.accessToken;
export const getRefreshToken = ({ auth }) => auth.refreshToken;
export const getDayId = ({ auth }) => auth.user.days;
export const getErrorLogin = ({ auth }) => auth.error;
export const getID = ({ auth }) => auth.user.id;
export const getUser = ({ auth }) => auth.user;

export const getNotAllowedProducts = ({ auth }) =>
  auth.user.userData?.notAllowedProducts;

export const getNewUserId = ({ auth }) => auth.newUser?.id;
export const getUserIsRefreshing = ({ auth }) => auth.isRefreshing;
export const getIsTotalLogin = ({ auth }) => auth.isTotalLogin;
