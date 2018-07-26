import { Income } from './income';
import { Account } from './account';
import { IncomeCategory } from './incomeCategory';
import { Cost } from './cost';
import { CostCategory } from './costCategory';
import { Transfer } from './transfer';
import { TransferCategory } from './transferCategory';

export const testData = {
  incomes: [
    new Income('1', new Date(), 2340, 'heyho', 'helo', 'Cat 1'),
    new Income('2', new Date(), 5547, 'heyho', 'helo', 'Cat 1'),
    new Income('3', new Date(), 154474, 'heyho', 'helo', 'Cat 1'),
    new Income('4', new Date(), 22103, 'heyho', 'helo', 'Cat 1'),
    new Income('5', new Date(), 1881, 'heyho', 'helo', 'Cat 1'),
    new Income('6', new Date(), 111, 'heyho', 'helo', 'Cat 1'),
    new Income('7', new Date(), 111, 'heyho', 'helo', 'Cat 1'),
    new Income('8', new Date(), 111, 'heyho', 'helo', 'Cat 1'),
    new Income('9', new Date(), 111, 'heyho', 'helo', 'Cat 1'),
    new Income('10', new Date(), 222, 'blabla', 'bla', 'Cat 2')
  ],
  costs: [
    new Cost('1', new Date(), 500, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('2', new Date(), 1237, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('3', new Date(), 123474, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('4', new Date(), 12303, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('5', new Date(), 1231, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('6', new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('7', new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('8', new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('9', new Date(), 123, 'fsdjl', new Account('httr'), new CostCategory('Cat 1')),
    new Cost('10', new Date(), 123, 'blabla', new Account('bla'), new CostCategory('Cat 2'))
  ],
  transfers: [
    new Transfer(
      '1',
      new Date(),
      2340,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '2',
      new Date(),
      5547,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '3',
      new Date(),
      154474,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '4',
      new Date(),
      22103,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '5',
      new Date(),
      1881,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '6',
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '7',
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '8',
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '9',
      new Date(),
      111,
      'hhggtt',
      new Account('ffdd'),
      new Account('ttrr'),
      new TransferCategory('Cat 1')
    ),
    new Transfer(
      '10',
      new Date(),
      222,
      'blabla',
      new Account('bla'),
      new Account('halo'),
      new TransferCategory('Cat 2')
    )
  ]
};
