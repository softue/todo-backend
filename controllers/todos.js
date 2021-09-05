import mongoose from 'mongoose';
import Todo from '../models/todos.js'

export const readTodos = async(req, res) => {
    try {
        const todos = await Todo.find().sort({title: 1});
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export const createTodos = async(req, res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({error: error.message});
    }
}

// my solution
// export const updateTodos = async(req, res) => {
//     console.log("updateTodos", req.params);
//     try {
//         const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
//         res.status(201).json(todo);
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// }

// instructor solution
export const updateTodos = async(req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;

    if ( !mongoose.isValidObjectId(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }

    const todo = {title, content, _id: id};
    await Todo.findByIdAndUpdate(id, todo, {new:true});
    res.json(todo);
}

export const deleteTodo = async(req, res) => {
    const {id} = req.params;
    const result = await Todo.findByIdAndDelete(id);
    res.status(200).json(result);
}