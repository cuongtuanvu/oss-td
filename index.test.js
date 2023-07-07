const getRandomNumber = require("./main")

test('It should run an integer', () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
})