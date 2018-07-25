export class Transaction {
  constructor(id: string, date: Date, amount: number, comment: string) {
    this.id = id;
    this.date = date;
    this.amount = amount;
    this.comment = comment;
  }

  id: string;
  date: Date;
  amount: number;
  comment: string;
}
