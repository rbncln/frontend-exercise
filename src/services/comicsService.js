import DataService from "./dataService";

const BASE_URL = "https://gateway.marvel.com";
const API_KEY =
  "?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";

class ComicsService {
  getComics() {
    var url = `${BASE_URL}/v1/public/comics${API_KEY}`;
    return DataService.getRequest(url);
  }
}

export default new ComicsService();
