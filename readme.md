# volt api client for nodejs

Easily integrate with the [Volt by Volusion](https://volusion.com/volt) API. This is the core ecommerce data of a store such as Products, Categories, Orders. See [Volt API Documentation](https://app.swaggerhub.com/apis-docs/volusion/VOLT). 

If you're developing a theme, check out the [Element Docs](https://volusion.github.io/element/) instead.

## Install

Use this package in your project by doing:

```bash
npm install @volusion/volt-api
```


## Get Started

```js
// instantiate the client 
const voltClient = require('@volusion/volt-api');
const volt = new voltClient({
    apiKey: "9fduAnbishA0N9BXlNQ6zC:9kaub81gaVl1oJfXiIbal8" // replace with your key
});

// call an endpoint
const data = await volt.getOrders();

// use the data
const order = data.items[0]; // for this sample, let's look at the first order in the array

```

## Security Tip

We recommend setting an environment variable in your project called `VOLT_API_KEY`.

You probably already know how to do this using popular packages like [dotenv](https://www.npmjs.com/package/dotenv) or similar to manage environment variables. But if not, you can quickly set your environment variables locally by simply running the following command which sets the environment variable for the duration of your terminal session. So just run this before you run `npm start`.


```js
// when you instantiate the client, get the key from an environment variable
const voltClient = require('@volusion/volt-api');
const volt = new voltClient({
    apiKey: process.env.VOLT_API_KEY // 👈 best practice ✨
});
```

## Future

- more examples

## Contributing

Run tests

```bash
npm run test
```