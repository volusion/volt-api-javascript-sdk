const voltClient = require('./volt');
const volt = new voltClient({
    apiKey: process.env.VOLT_API_KEY
});

// I know we're supposed to mock, but let's actually call the real API

test('have a VOLT_API_KEY env variable set', () => {
    expect(process.env.VOLT_API_KEY).toBeDefined();
})

test('for getOrders() an order is returned', async () => {
    const data = await volt.getOrders();
    expect(data.items[0]).toHaveProperty('createdOn');
    expect(data.items[0]).toHaveProperty('status');
});

// test('adds 4 + 4 to equal 8', () => {
//     expect(sum(4,4)).toBe(8);
// })