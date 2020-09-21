const store = require('./store');

function getPosts(){
    return new Promise((resolve, reject) =>{
        resolve(store.getPosts());
    });
}

function getPost(postID){
    return new Promise((resolve, reject) =>{
        resolve(store.getPost(postID));
    });
}

function addPost(post){
    return new Promise((resolve, reject) =>{
        if(!post){
            reject('No ingresaste ningun contenido.');
        }
        resolve(store.addPost(post));
    });
}

function editPost(postID, propiedad, valorNuevo){
    return new Promise((resolve, reject) =>{
        if(!postID || !propiedad || !valorNuevo){
            reject('No ingresaste algun elemento');
        }
        resolve(store.editPost(postID, propiedad, valorNuevo));
    });
}

function removePost(postID){
    return new Promise((resolve, reject) =>{
        if(!postID){
            reject('No ingresantes ningun contenido.');
        }
        resolve(store.removePost(postID));
    });
}

module.exports = {
    getPosts,
    getPost,
    addPost,
    editPost,
    removePost
};