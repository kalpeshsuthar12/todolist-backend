const User = require('../models/user');
const Todo = require('../models/todo_list');


//signup
module.exports.signup = async function(req, res){

    try{

        let user = await User.findOne({mobile:req.body.mobile});
        if(!user){
            let newUser = await User.create({
                name :  req.body.name,
                mobile :  req.body.mobile,
                password : req.body.password
            })
            return res.status(200).json({
                status: 'success',
                newUser
            })
        }
        return res.status(203).json({
            status: 'warning'
        });

    }catch(e){

        return res.status(400).json({
            status: 'Error',
            message: e
        });
    }
}

//signin
module.exports.signin = async function(req, res){

    try{

        let user = await User.findOne({mobile:req.body.mobile});
        let todo = await Todo.findOne(user);
        if(!user){
            return res.status(203).json({
                status: 'Error',
                message: "User Not Found!"
            });
        }
        return res.status(200).json({
            status: 'success',
            user,
            todo
        });

    }catch(e){

        return res.status(400).json({
            status: 'Error',
            message: e
        });
    }
}