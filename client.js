module.exports = class Client {
    constructor(id) {
        this.id = id;
		this.token = '';
		this.loginTime = Date.now();
    }
    
};
