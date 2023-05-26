export class Card {
  id = "";
  name = "";
  image = "";
  specialist = "";
  reserveDate = "";

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.image = obj.imageUrl;
    this.specialist = obj.specialist;
    this.reserveDate = obj.ReservesDate;
  }
}
