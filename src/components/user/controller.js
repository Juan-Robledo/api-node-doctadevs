const store = require('./store');

function getUsers(){
    return new Promise((resolve, reject) =>{
        resolve(store.getUsers());
    });
}

function getUser(userID){
    return new Promise((resolve, reject) =>{
        resolve(store.getUser(userID));
    });
}

function addUser(user){
    return new Promise((resolve, reject) =>{
        if(!user){
            reject('No ingresaste ningun contenido.');
        }
        resolve(store.addUser(user));
    });
}

function editUser(userID, propiedad, valorNuevo){
    return new Promise((resolve, reject) =>{
        if(!userID || !propiedad || !valorNuevo){
            reject('No ingresaste algun elemento');
        }
        resolve(store.editUser(userID, propiedad, valorNuevo));
    });
}

function removeUser(userID){
    return new Promise((resolve, reject) =>{
        if(!userID){
            reject('No ingresantes ningun contenido.');
        }
        resolve(store.removeUser(userID));
    });
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser,
};