import BaseRepository from "../BaseRepository";
const resource = "/users";
interface UserInfo {
  access_token: string;
  hourly_rate: any;
  name: string;
  role: string[];
  username: string;
}
interface SignUpBody {
  firstName: string;
  lastName: string;
  nationalId: string;
  mobilePhoneNumber: string;
  email: string;
  password: string;
}
interface login {
  mobilePhoneNumber: string;
  password: string;
}
const authRepository = {
  register(body: SignUpBody) {
    return BaseRepository.post(`${resource}`, body);
  },
  login(body: login) {
    return BaseRepository.get(
      `${resource}?mobilePhoneNumber=${body.mobilePhoneNumber}&&password=${body.password}`
    );
  },
};
export default authRepository;
