export function pwdCheck(pwd) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  const reg = new RegExp(pattern);
  const res = pwd.match(reg);
  console.log(res);
  return res !== null;
}

export function userCheck(user) {
  const pattern = /^((13)|(15)|(18))\d{9}$/;
  const reg = new RegExp(pattern);
  const res = user.match(reg);
  console.log(res);
  return res !== null;
}
