import Cookies from 'js-cookie';

export const checkCookie = (req) => {
  const authUser = req.header.cookies;
  console.log('authUser test', authUser)
  if (authUser === undefined) {
    return 0;
  }
  return 1;
}

export const getCookie = () => {
  const authUser = Cookies.getJSON('authUser');
  // return JSON.parse(authUser);
  return authUser
}

export const addCookie = (data) => {
  console.log('run add cookie', data);
  Cookies.set('authUser', data);
}
