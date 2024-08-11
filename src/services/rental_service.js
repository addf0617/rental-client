import axios from "axios";

const API_URL = "http://localhost:8080/api/rental";

class RentalService {
  async getRentals(filter) {
    if (filter) {
      let query = `${API_URL}?`;
      for (const [key, value] of Object.entries(filter)) {
        query += `${key}=${value}&`;
      }
      return await axios.get(query);
    } else {
      return await axios.get(API_URL);
    }
  }

  async searchRentalsImg(_id) {
    return await axios.get(`${API_URL}/image/${_id}`);
  }

  getImgURL(id) {
    return `${API_URL}/image/${id}`;
  }

  async getRentalById(_id) {
    return await axios.get(`${API_URL}/${_id}`);
  }

  async getRentalByUserId(_id) {
    return await axios.get(`${API_URL}/user/${_id}`);
  }

  async createRental(rental) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else token = "";
    return await axios.post(API_URL, rental, {
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    });
  }

  async deleteRental(_id) {
    return await axios.delete(`${API_URL}/${_id}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
      },
    });
  }
}

export default new RentalService();
