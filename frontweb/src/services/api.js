import $ from 'jquery';

export default  {
    // baseURL= 'http://chat.marceloratton.com';

    async call (type, method, data) {
        return await $.ajax({
            url: `http://localhost:3333${method}`,
            type: type,
            data: data,
            dataType: 'json'
            // success: function(response) {
            //     console.log(response)
            //     return true;
            // }
        });
    },

    async post (method, data= null) {
        return await this.call('POST', method, data);
    },

    async get (method, data= null) {
        return await this.call('GET', method, data);
    },

    async delete (method, data= null) {
        return await this.call('POST', `${method}Delete`, data);
    },
}

