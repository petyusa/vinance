export class Account {
  constructor(
    public id: string,
    public name: string,
    public isSaving: boolean,
    public balance = 0
  ) {}

  normalizedName: string;
}
