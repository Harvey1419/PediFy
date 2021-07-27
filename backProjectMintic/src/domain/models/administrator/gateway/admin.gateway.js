const { Observable } = require("rxjs");
const Admin = require('../../domain/models/administrator/admin.model')

class adminGateway {
    adminSignup(email,password);
    adminLogin(email,password);
}