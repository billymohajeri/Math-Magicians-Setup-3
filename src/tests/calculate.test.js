import calculate from '../logic/calculate';

describe('Tests for calculate.js', () => {
  test('AC should reset everything', () => {
    const obj = {
      total: '1',
      next: '5',
      operation: '-',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('2 zero entry', () => {
    const obj = {
      total: '',
      next: '0',
      operation: '',
    };
    expect(calculate(obj, '0')).toEqual({});
  });
  test('There is an operation, update next', () => {
    const obj = {
      total: '',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '3')).toEqual({
      total: '',
      next: '53',
      operation: '+',
    });
  });
  test('There is an operation, update next', () => {
    const obj = {
      total: '',
      next: '0',
      operation: '-',
    };
    expect(calculate(obj, '2')).toEqual({
      total: '',
      next: '2',
      operation: '-',
    });
  });
  test('No operation, update next and clear the value', () => {
    const obj = {
      total: null,
      next: '7',
      operation: '',
    };
    expect(calculate(obj, '88')).toEqual({
      total: null,
      next: '788',
    });
  });
  test('Decimal key', () => {
    const obj = {
      total: null,
      next: '5.',
      operation: '',
    };
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '5.',
      operation: '',
    });
  });
  test('Decimal key', () => {
    const obj = {
      total: null,
      next: '3',
      operation: '',
    };
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '3.',
      operation: '',
    });
  });
  test('Pressing +/- key', () => {
    const obj = {
      total: null,
      next: '22',
      operation: '',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-22',
      operation: '',
    });
  });
  test('Pressing +/- key for negative numbers', () => {
    const obj = {
      total: null,
      next: '-3.78',
      operation: '',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '3.78',
      operation: '',
    });
  });
  test('Pressed an operation after pressing =', () => {
    const obj = {
      total: '4321',
      next: '',
      operation: '',
    };
    expect(calculate(obj, '+')).toEqual({
      total: '4321',
      next: '',
      operation: '+',
    });
  });
  test('Pressed an operation button when there is an existing operation', () => {
    const obj = {
      total: '540',
      next: '',
      operation: 'x',
    };
    expect(calculate(obj, 'x')).toEqual({
      total: '540',
      next: '',
      operation: 'x',
    });
  });
});
