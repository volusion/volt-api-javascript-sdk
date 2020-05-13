const axios = require('axios');
const querystring = require('querystring');
const baseUrl = "https://volt-api.volusion.com"

module.exports = class voltApi {

    constructor(config) {
        this.config = config;
    }

    // Orders

    async addOrder(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders`, data: data})
    }
    async getOrders(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/orders` + otq(options)})
        // todo: make sure we support updatedAfter. Also need to handle paging or just return a boat load 🚢.
    }
    async updateOrder(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/orders/${id}`, data: data})
    }
    async addOrderPaymentLifecycleEvent(id, data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders/${id}/paymentlifecycleevent`, data: data})
    }
    async addOrderFulfillmentEvent(id, data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/orders/${id}/fulfillmentlifecycleevent`, data: data})
    }
    async deleteOrder(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/orders/${id}`})
    }

    // Products

    async addProduct(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/products`, data: data})
    }
    async getProducts(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/products` + otq(options)})
    }
    async updateProduct(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/products/${id}`, data: data})
    }
    async deleteProduct(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/products/${id}`})
    }

    // Categories

    async getCategories(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/categorytree` + otq(options)})
    }

    // Shoppers
    // NOTE: This url doesn't currently match the admin /admin/shoppers url, but we plan to change all the urls to this short prefix anyways soon

    async addShopper(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/shoppers`, data: data})
    }
    async getShoppers(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/shoppers` + otq(options)})
    }
    async updateShopper(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/shoppers/${id}`, data: data})
    }
    async deleteShopper(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/shoppers/${id}`})
    }

    // Store Information

    async getStoreInformation(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/storeinformation` + otq(options)})
    }
    
    // Webhooks

    async addWebhook(data) {
        return await this.makeVoltApiRequest({method: "POST", url: `/webhooks`, data: data})
    }
    async getWebhooks(options) {
        return await this.makeVoltApiRequest({method: "GET", url: `/webhooks` + otq(options)})
    }
    async updateWebhook(id, data) {
        return await this.makeVoltApiRequest({method: "PUT", url: `/webhooks/${id}`, data: data})
    }
    async deleteWebhook(id) {
        return await this.makeVoltApiRequest({method: "DELETE", url: `/webhooks/${id}`})
    }

    //*********************************************************
    async makeVoltApiRequest(r) {
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
