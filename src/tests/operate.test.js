import operate from '../logic/operate';

describe('Tests for operate.js', () => {
  test('100 + 20 = 120', () => {
    const result = operate('100', '20', '+');
    expect(result).toBe('120');
  });

  test('7 - 13 = -6', () => {
    const result = operate('7', '13', '-');
    expect(result).toBe('-6');
  });

  test('70 x 3 = 210', () => {
    const result = operate('70', '3', 'x');
    expect(result).toBe('210');
  });

  test('-81 ÷ 9 = -9', () => {
    const result = operate('-81', '9', '÷');
    expect(result).toBe('-9');
  });

  test("1 ÷ 0 = Can't divide by 0.", () => {
    const result = operate('1', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('20 % 5 = 0', () => {
    const result = operate('20', '5', '%');
    expect(result).toBe('0');
  });

  test("121 % 0 = Can't find modulo as can't divide by 0.", () => {
    const result = operate('121', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
