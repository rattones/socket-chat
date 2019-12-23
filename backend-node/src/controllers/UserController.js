const uniqid= require('uniqid');

const { User } = require('../models');

module.exports = {
    async index (req, res) {

        const { uid } = req.params;

        const users = (uid === undefined) ? await User.findAll({ 
                attributes:[ 'uid', 'name', 'email' ]
            })
        : await User.findAll({ 
                attributes:[ 'uid', 'name', 'email' ],
                where: { uid }
            });            


        return res.json( users );
    },

    async create (req, res) {

        const { name, email } = req.body;

        const uid= uniqid();

        const user= await User.create({ uid, name, email },
            { fields: [ 'uid', 'name', 'email' ] });

        return res.json( user );
    },

    async auth (req, res) {
        const { email } = req.body;

        const user = await User.findAll({
                attributes:[ 'uid', 'name', 'email' ],
                where: { email }            
            });

        return res.json( user );
    },

    async remove (req, res) {
        const { uid } = req.params;

        const response= await User.findAndDelete({ uid });

        return res.json('delete');
    }
}