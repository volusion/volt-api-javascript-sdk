const axios = require('axios');
const querystring = require('querystring');
const baseUrl = "https://volt-api.volusion.com"

module.exports = class voltApi {

    constructor(config) {
        this.config = config;
    }

    // Orders

    addOrder = async function addOrder(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders`, data: data})
    }
    getOrders = async function getOrders(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/orders` + otq(options)})
        // todo: make sure we support updatedAfter. Also need to handle paging or just return a boat load 🚢.
    }
    updateOrder = async function updateOrder(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/orders/${id}`, data: data})
    }
    addOrderPaymentLifecycleEvent = async function addOrderPaymentLifecycleEvent(id, data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders/${id}/paymentlifecycleevent`, data: data})
    }
    addOrderFulfillmentEvent = async function addOrderFulfillmentEvent(id, data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders/${id}/fulfillmentlifecycleevent`, data: data})
    }
    deleteOrder = async function deleteOrder(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/orders/${id}`})
    }

    // Products

    addProduct = async function addProduct(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/products`, data: data})
    }
    getProducts = async function getProducts(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/products` + otq(options)})
    }
    updateProduct = async function updateProduct(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/products/${id}`, data: data})
    }
    deleteProduct = async function deleteProduct(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/products/${id}`})
    }

    // Categories

    getCategories = async function getCategories(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/categorytree` + otq(options)})
    }

    // Shoppers
    // NOTE: This url doesn't currently match the admin /admin/shoppers url, but we plan to change all the urls to this short prefix anyways soon

    addShopper = async function addShopper(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/shoppers`, data: data})
    }
    getShoppers = async function getShoppers(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/shoppers` + otq(options)})
    }
    updateShopper = async function updateShopper(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/shoppers/${id}`, data: data})
    }
    deleteShopper = async function deleteShopper(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/shoppers/${id}`})
    }

    // Store Information

    getStoreInformation = async function getStoreInformation(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/storeinformation` + otq(options)})
    }
    
    // Webhooks

    addWebhook = async function addWebhook(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/webhooks`, data: data})
    }
    getWebhooks = async function getWebhooks(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/webhooks` + otq(options)})
    }
    updateWebhook = async function updateWebhook(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/webhooks/${id}`, data: data})
    }
    deleteWebhook = async function deleteWebhook(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/webhooks/${id}`})
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
