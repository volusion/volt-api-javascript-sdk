const axios = require('axios');
const querystring = require('querystring');
const baseUrl = "https://volt-api.volusion.com"

module.exports = class voltApi {

    constructor(config) {
        this.config = config;
    }

    // Orders

    getOrders = async function getOrders(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/store/admin/orders` + otq(options)})
        // todo: make sure we support updatedAfter. Also need to handle paging or just return a boat load 🚢.
    }
    updateOrder = async function updateOrder(id, data, options) {
        return await this.makeVoltApiRequest({method: "POST", url: `/store/admin/orders/${id}` + otq(options), data: data})
    }

    // Products

    getProducts = async function getProducts(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/store/admin/products` + otq(options)})
    }
    updateProduct = async function updateProduct(id, data, options) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/store/admin/products/${id}` + otq(options), data: data})
    }

    // Categories

    getCategories = async function getCategories(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/store/admin/categorytree` + otq(options)})
    }

    // Shoppers

    getShoppers = async function getShoppers(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/admin/shoppers` + otq(options)})
    }

    // Store Information

    getStoreInformation = async function getStoreInformation(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/admin/storeinformation` + otq(options)})
    }
    
    // Webhooks

    getWebhooks = async function getWebhooks(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/admin/webhooks` + otq(options)})
    }

    //*********************************************************
    makeVoltApiRequest = async function makeVoltApiRequest(r) {
        try {
            const { data } = await axios({
                headers: {
                    "Authorization": this.config.apiKey,
                    "Content-Type": "application/json"
                },
                url: baseUrl + r.url,
                method: r.method,
                data: r.data || null
            });
            return data;
        } catch (error) {
            handleError(error);
            throw error;
        }
    }

}

// ----------------------------------------------------
// Helper Functions
// ----------------------------------------------------

function otq(options) {
    
    // turns something like this:
    // {
    //     pageSize: 10,
    //     foo: bar    
    // }
    // into this:
    // "?pageSize=10&foo=bar"

    let qs = querystring.stringify(options);
    if (qs) {
        qs = "?" + qs
    }
    return qs;

}

function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log("error.response.data", error.response.data);
        console.log("error.response.status", error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        console.log("error.request", error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("error.message", error.message);
    }
}