// import CryptoJS from "crypto-js";
import { password } from "config";

export function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validToken = (rawToken) => {
  const tempPass = CryptoJS.AES.decrypt(
    req.headers.txt,
    process.env.NEXT_PUBLIC_MY_SECRET
  );
  const message = tempPass.toString(CryptoJS.enc.Utf8);
  const [pass, date] = message.split(" ");
  // let sentMinute = new Date(date).getMinutes();
  let sentHour = new Date(date).getHours();
  // let recievedMinute = new Date().getMinutes();
  let recievedHour = new Date().getHours();
  if (sentHour == recievedHour && pass == password) {
    return true;
  }
  return false;
};

export const generateToken = () => {
  let d = new Date();
  d.setSeconds(0, 0);
  const message = password + " " + d.toISOString();
  return Crypto.AES.encrypt(message, process.env.NEXT_PUBLIC_MY_SECRET);
};
