import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req,res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()})
    res.send(`User with name ${user.firstName} was added to users DATABASE`)
}

export const getSingleUser = (req,res) => {
    const id = req.params.id
    const foundUser = users.find(user => user.id === id)
    console.log('user Id', foundUser.id);
    console.log('params id', id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !== id)
    res.send(`User with id ${id} was deleted`)
}

export const updateUser = (req, res) => {
    const id = req.params.id
    const {firstName, lastName, age} = req.body;
    const userToUpdate = users.find(user => user.id === id);
    if (firstName) userToUpdate.firstName = firstName;
    if (lastName) userToUpdate.lastName = lastName;
    if (age) userToUpdate.age = age;
    res.send(`User with id ${id} was updated`);

}

export const getUsers = (req,res) => {
    res.send(users);
}
