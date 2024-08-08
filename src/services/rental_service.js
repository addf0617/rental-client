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

  async getRentalById(_id) {
    return await axios.get(`${API_URL}/${_id}`);
  }

  async createRental(rental) {
    return await axios.post(API_URL, rental);
  }

  async deleteRental(_id) {
    return await axios.delete(`${API_URL}/${_id}`);
  }
}

export default new RentalService();
