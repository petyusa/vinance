import { Transaction } from './transaction';

export class Cost extends Transaction {
  constructor(
    id: string,
    date: any,
    amount: number,
    comment: string,
    from: string,
    fromId: string,
    category: string
  ) {
    super(id, date, amount, comment);
    this.from = from;
    this.fromId = fromId;
    this.category = category;
  }

  from: string;
  fromId: string;
  category: string;
}
