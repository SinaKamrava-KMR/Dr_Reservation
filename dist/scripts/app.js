import { Card } from "./card.js";
import { HttpClient } from "./httpClient.js";

const cards = [];

const request = new HttpClient("http://localhost:3000/all");
request.getAll().then((result) => {
  console.log(result);
  // cards = [...result]
  result.forEach((item) => {
    cards.push(new Card(item));
  });
  console.log(cards);
});
