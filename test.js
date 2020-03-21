const voltClient = require('./volt');
const volt = new voltClient({
    apiKey: process.env.VOLT_API_KEY
});

// I know we're supposed to mock, but let's actually call the real API

test('have a VOLT_API_KEY env variable set', () => {
    expect(process.env.VOLT_API_KEY).toBeDefined();
})

// Orders

test('for getOrders() an order is returned', async () => {
    const data = await volt.getOrders();
    expect(data.items[0]).toHaveProperty('createdOn');
    expect(data.items[0]).toHaveProperty('status');
});

// Products

test('for getProducts() a product is returned', async () => {
    const data = await volt.getProducts();
    expect(data.items[0]).toHaveProperty('name');
    expect(data.items[0]).toHaveProperty('price');
});

// Categories

test('for getCategories() a category is returned', async () => {
    const data = await volt.getCategories();
    expect(data.categories[0]).toHaveProperty('name');
    expect(data.categories[0]).toHaveProperty('isInMenu');
});

// Shoppers

test('for getShoppers() a shopper is returned', async () => {
    const data = await volt.getShoppers();
    expect(data.items[0]).toHaveProperty('emailAddress');
});

// Store Information

test('for getStoreInformation() information is returned', async () => {
    const data = await volt.getStoreInformation();
    expect(data).toHaveProperty('storeUrl');
});

// Webhooks

test('for getWebhooks() a webhook is returned', async () => {
    const data = await volt.getWebhooks();
    expect(data[0]).toHaveProperty('action');
    expect(data[0]).toHaveProperty('resource');
    expect(data[0]).toHaveProperty('uri');
});