export class Transaction {
  constructor(date: Date, amount: number, comment: string) {
    this.date = date;
    this.amount = amount;
    this.comment = comment;
  }

  date: Date;
  amount: number;
  comment: string;
}
