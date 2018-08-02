export class CostCategory {
  constructor(id: string, name: string, color: string, balance: number) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.balance = balance;
  }

  id: string;
  name: string;
  normalizedName: string;
  balance: number;
  color: string;
}
