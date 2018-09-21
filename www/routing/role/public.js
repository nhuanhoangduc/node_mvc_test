"use strict";

const roles = require('../../config/cf_role');
const ChildRouter = require('../child_routing');

module.exports = class Auth extends ChildRouter {

    constructor() {
        super('/');
    }

    registerRouting(io) {
        return {

            '/': {
                config: {
                    auth: [roles.role.all.bin],
                    title: 'Trang chủ',
                    type: 'view',
                },
                methods: {
                    get: [function (req, res) {
                        return ChildRouter.redirect(res, '/login');
                    }]
                },
            },


            '/login': {
                config: {
                    auth: [roles.role.all.bin],
                    view: 'public/pages/login.ejs',
                    title: 'Đăng nhập',
                    type: 'view',
                },
                methods: {
                    get: [function (req, res) {
                        ChildRouter.renderToView(req, res);
                    }],

                    post: [async function (req, res) {

                    }]
                },
            },

        }
    }
};
