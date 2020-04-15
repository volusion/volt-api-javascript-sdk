const voltClient = require('./volt');
const volt = new voltClient({
    apiKey: process.env.VOLT_API_KEY
});

// I know we're supposed to mock, but let's actually call the real API

test('have a VOLT_API_KEY env variable set', () => {
    expect(process.env.VOLT_API_KEY).toBeDefined();
})

// --------------------------------------------------------------------
// Store Information
// --------------------------------------------------------------------

describe('Store Information', function() {
    test('for getStoreInformation() information is returned', async () => {
        const data = await volt.getStoreInformation();
        expect(data).toHaveProperty('storeUrl');
    });
});


// --------------------------------------------------------------------
// Products
// --------------------------------------------------------------------
// 1. Add a product
// 2. Update the product
// 3. Get products
// 4. Delete the product

describe('Products', function() {
    let productId = null // we'll need to keep track of the product id we're about to create, update, and then delete
    let productName = 'test-' + Math.random().toString(36).substr(2,7); // random unique name "test-[7 random characters]"
    test('for addProduct() the product is added', async () => {
        const testAddProductModel = require('./models/Product/SimpleProduct')
        testAddProductModel.name = productName;
        const data = await volt.addProduct(testAddProductModel);
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('price');
        productId = data.id // what's our new product's id?
    });
    test('for updateProduct() modify a product', async () => {
        const testUpdateProductModel = require('./models/Product/SimpleProduct')
        testUpdateProductModel.id = productId; // have to pass the id in both the data as well as the url
        testUpdateProductModel.name = productName + '-updated'; // change the product name
        const data = await volt.updateProduct(productId,testUpdateProductModel);
        expect(data).toHaveProperty('name', productName + '-updated'); // did it change? ✅
    });
    test('for getProducts() a product is returned', async () => {
        const data = await volt.getProducts();
        expect(data.items[0]).toHaveProperty('name');
        expect(data.items[0]).toHaveProperty('price');
    });
    test('for deleteProduct() a product is deleted', async () => {
        const data = await volt.deleteProduct(productId);
        expect(data).toBe('');
    });    
});


// --------------------------------------------------------------------
// Categories
// --------------------------------------------------------------------

// Didn't test for adding categories since there is no POST endpoint you have to PUT the entire existing categories with your new one added.

describe('Categories', function() {
    test('for getCategories() a category is returned', async () => {
        const data = await volt.getCategories();
        expect(data.categories[0]).toHaveProperty('name');
        expect(data.categories[0]).toHaveProperty('isInMenu');
    });
});


// --------------------------------------------------------------------
// Shoppers
// --------------------------------------------------------------------
// 1. Add a shopper
// 2. (put is not supported, so skipping that)
// 3. Get list of shoppers
// 4. Delete the shopper

describe('Shoppers', function() {
    let shopperId = null // we'll need to keep track of the Shopper id we're about to create, update, and then delete
    let shopperEmail = 'test-' + Math.random().toString(36).substr(2,7) + '@test.com'; // random unique name "test-[7 random characters]"
    test('for addShopper() the shopper is added', async () => {
        const testAddShopperModel = require('./models/Shopper/SimpleShopper')
        testAddShopperModel.name = shopperEmail;
        const data = await volt.addShopper(testAddShopperModel);
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('emailAddress');
        shopperId = data.id // what's our new shopper's id?
    });
    test('for getShoppers() a shopper is returned', async () => {
        const data = await volt.getShoppers();
        expect(data.items[0]).toHaveProperty('emailAddress');
    });
    test('for deleteShopper() a shopper is deleted', async () => {
        const data = await volt.deleteShopper(shopperId);
        //expect(data).toBe(''); // TODO test for something
    });    
});


// --------------------------------------------------------------------
// Orders  // TODO
// --------------------------------------------------------------------
// 1. Add a order
// 2. Update the order
// 3. Get orders
// 4. Delete the order

describe('Orders', function() {
    let orderId = null // we'll need to keep track of the order id we're about to create, update, and then delete
    let orderName = 'test-' + Math.random().toString(36).substr(2,7); // random unique name "test-[7 random characters]"
    // test('for addCart() the order is added', async () => {
    //     const testAddCartModel = require('./models/Order/SimpleCart')
    //     const data = await volt.addCart(testAddCartModel);
    //     expect(data).toHaveProperty('id');
    //     cartId = data.id // what's our new order's id?
    // });
    // test('for addOrder() the order is added', async () => {
    //     const testAddOrderModel = require('./models/Order/SimpleOrder')
    //     testAddOrderModel.name = orderName;
    //     const data = await volt.addOrder(testAddOrderModel);
    //     expect(data).toHaveProperty('id');
    //     expect(data).toHaveProperty('name');
    //     expect(data).toHaveProperty('price');
    //     orderId = data.id // what's our new order's id?
    // });
    // test('for updateOrder() modify a order', async () => {
    //     const testUpdateOrderModel = require('./models/Order/SimpleOrder')
    //     testUpdateOrderModel.id = orderId; // have to pass the id in both the data as well as the url
    //     testUpdateOrderModel.name = orderName + '-updated'; // change the order name
    //     const data = await volt.updateOrder(orderId,testUpdateOrderModel);
    //     expect(data).toHaveProperty('name', orderName + '-updated'); // did it change? ✅
    // });
    // test('for updateOrder() modify a order', async () => {
    //     const testUpdateOrderModel = require('./models/Order/SimpleOrder')
    //     testUpdateOrderModel.id = orderId; // have to pass the id in both the data as well as the url
    //     testUpdateOrderModel.name = orderName + '-updated'; // change the order name
    //     const data = await volt.updateOrder(orderId,testUpdateOrderModel);
    //     expect(data).toHaveProperty('name', orderName + '-updated'); // did it change? ✅
    // });
    test('for getOrders() a order is returned', async () => {
        const data = await volt.getOrders();
        expect(data.items[0]).toHaveProperty('createdOn');
        expect(data.items[0]).toHaveProperty('status');
    });
    // test('for deleteOrder() a order is deleted', async () => {
    //     const data = await volt.deleteOrder(orderId);
    //     expect(data).toBe('');
    // });    


    // ***************************************************************************************************
    // NOTE: 
    // Until we have the above working, you can test these manually if you know an order id to use. 
    // These will work against any new order.
    const wantToUseThese = false;
    if (wantToUseThese) {

        // Capture Payment
        test('for addOrderPaymentLifecycleEvent() capture the payment', async () => {
            const testAddOrderPaymentLifecycleEvent = require('./models/Order/SimplePaymentLifecycleEvent')
            orderId = '5e967b035903305955a027f3'
            const data = await volt.addOrderPaymentLifecycleEvent(orderId,testAddOrderPaymentLifecycleEvent);
            expect(data).toHaveProperty('id');
            expect(data).toHaveProperty('chargeAmount');
        });

        // Add Tracking Number
        test('for addOrderFulfillmentEvent() add tracking number', async () => {
            const testAddOrderFulfillmentEvent = require('./models/Order/FulfillmentEvent-Shipped')
            orderId = '5e967b035903305955a027f3'
            const data = await volt.addOrderFulfillmentEvent(orderId,testAddOrderFulfillmentEvent);
            expect(data).toHaveProperty('id');
            expect(data).toHaveProperty('trackingInformation');
        });

    }
    // ***************************************************************************************************

    
});


// --------------------------------------------------------------------
// Webhooks
// --------------------------------------------------------------------
// 1. Add a webhook
// 2. (put is not supported, so skipping that)
// 3. Get list of webhooks
// 4. Delete the webhook

describe('Webhooks', function() {
    let webhookId = null // we'll need to keep track of the Webhook id we're about to create, update, and then delete
    let webhookName = 'test-' + Math.random().toString(36).substr(2,7); // random unique name "test-[7 random characters]"
    test('for addWebhook() the webhook is added', async () => {
        const testAddWebhookModel = require('./models/Webhook/SimpleWebhook')
        testAddWebhookModel.name = webhookName;
        const data = await volt.addWebhook(testAddWebhookModel);
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('resource');
        webhookId = data.id // what's our new webhook's id?
    });
    test('for getWebhooks() a webhook is returned', async () => {
        const data = await volt.getWebhooks();
        expect(data[0]).toHaveProperty('action');
        expect(data[0]).toHaveProperty('resource');
        expect(data[0]).toHaveProperty('uri');    
    });
    test('for deleteWebhook() a webhook is deleted', async () => {
        const data = await volt.deleteWebhook(webhookId);
        //expect(data).toBe(''); // TODO test for something
    });    
});
