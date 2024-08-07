import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  async login(userdata) {
    return await axios.post(API_URL + "/login", userdata);
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(userdata) {
    console.log(API_URL + "/register");

    return await axios.post(`${API_URL}/register`, userdata);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
