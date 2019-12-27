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
                { fields: [ 'uid', 'name', 'email' ] })
            .catch((error)=> {
                console.error(error);
            });

        return res.json( user );
    },

    async auth (req, res) {

        const { email } = req.body;

        const user = await User.findAll({
                attributes:[ 'uid', 'name', 'email' ],
                where: { email }            
            }).catch((error)=> {
                console.error(error);
            });

        req.io.emit('emitUserList', { });

        return res.json( user );
    },

    async logout (req, res) {
        req.io.emit('emitUserList', { });

        return res.json( true );
    },

    async remove (req, res) {
        const { uid } = req.body;

        const response= await User.destroy({ where: { uid }})
            .catch((error)=>{
                console.error(error)
            });

        return res.json('delete');
    },

    async getMessage (req, res) {

        const { uid, name, message } = req.body;

        const user= await User.findAll({
                    attributes:[ 'uid', 'name', 'email' ],
                    where: { uid }
        });

        if (!user) { res.json( false ); }

        // console.log( req.io );

        req.io.emit('emitMessage', { uid, name, message });

        res.json( true );
    }
}