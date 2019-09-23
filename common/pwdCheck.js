export default function (pwd) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  const reg = new RegExp(pattern);
  const res = pwd.match(reg);
  console.log(res);
  return res !== null;
}
