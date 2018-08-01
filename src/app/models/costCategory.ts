export class CostCategory {
  constructor(id: string, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  id: string;
  name: string;
  normalizedName: string;
  balance: number;
}
