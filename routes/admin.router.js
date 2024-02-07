const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')



const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    branding: {
        logo: 'https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg',
        companyName: "ZUES"
    }
})



const ADMIN = {
    email: 'admin@exampel.com',
    password: 'lovejs'
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: 'admin-bro',
    cookiePassword: 'soupersecret-and-long-password-for-a-cookie-in-the-browser',
    authenticate: async(email, password) => {
        if (email == ADMIN.email && password == ADMIN.password) {
            return ADMIN
        }
        return ADMIN
    }
})

module.exports = router