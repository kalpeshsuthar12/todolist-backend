const User = require('../models/user');
const Todo = require('../models/todo_list');


//todo list item with user
module.exports.list = async function(req, res){

    try{
        let todo = await Todo.find({user:req.params.id}); 
        return res.json(200,{
            todo
        });

    }catch(e){
        console.log(e);
        return res.json(400,{
            e
        });
    }
}

//add todo item
module.exports.add = async function(req, res){

    try{

        let todo = await Todo.create({
            title:req.body.title,
            completed:req.body.completed,
            user:req.body.user        
        })
        return res.json(200,{
            todo
        });

    }catch(error){

        return res.json(400,{
            error
        });

    }
}

//delete todo item
module.exports.delete = async function(req, res){

    try{

        let todo = await Todo.findByIdAndDelete(req.params.id);
        return res.json(200,{
            todo
        });

    }catch(e){

        return res.json(400,{
            e
        });

    }
}

//update todo item
module.exports.update = async function(req, res){

    try{

        let updatetodo = await Todo.findOneAndUpdate({_id:req.params.id},{
            title: req.body.title,
            completed: req.body.completed
        })
        updatetodo.save();
        return res.json(200,{
            updatetodo
        });

    }catch(error){

        return res.json(400,{
            error
        });

    }
}