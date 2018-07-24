import { Income } from './income';
import { Account } from './account';
import { IncomeCategory } from './incomeCategory';
import { Cost } from './cost';
import { CostCategory } from './costCategory';
import { Transfer } from './transfer';
import { TransferCategory } from './transferCategory';

export const testData = {
  incomes: [
    new Income(new Date(), 2340, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 5547, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 154474, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 22103, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 1881, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 111, 'heyho', new Account('helo'), new IncomeCategory('Cat 1')),
    new Income(new Date(), 222, 'blabla', new Account('bla'), new IncomeCategory('Cat 2'))
  ],
  costs: [
    new Cost(new Date(), 500, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 1237, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123474, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 12303, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 1231, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost(new Date(), 123, 'blabla', new Account('bla'), new CostCategory('Cat 2'))
  ],
  transfers: [
    new Transfer(
      new Date(),
      2340,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      5547,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      154474,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      22103,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      1881,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      new Date(),
      222,
      'blabla',
      new Account('bla'),
      new Account('halo'),
      new TransferCategory('Cat 2')
    )
  ]
};
