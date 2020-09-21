const Model = require("./model");

async function getUsers() {
    // try {
    //     const res = await Model.find({});
    //     return res;
    // } catch (e) {
    //     console.log(e);
    // }
    return Model.find({});
}

function getUser(userID) {
    // try {
    //     const res = await Model.find({ id: userID });
    //     return res;
    // } catch (e) {
    //     console.log(e);
    // }
    return Model.find({ id: userID });
}

function addUser(user) {
    // const userNuevo = new Model(user);
    // try{
    //     const res = await userNuevo.save();
    //     return res;
    // } catch (e) {
    //     console.log(e);
    // }
    const userNuevo = new Model(user);
    return userNuevo.save();
}


function editUser(userID, propiedad, valorNuevo) {
    // try {
    //     let nuevoUsuario = {};
    //     nuevoUsuario[propiedad] = valorNuevo;
    //     const res = await Model.updateOne(
    //         {
    //             id: userID
    //         },
    //         nuevoUsuario
    //     );
    //     return res;
    // } catch (e) {
    //     console.log(e);
    // }
    let nuevoUsuario = {};
    nuevoUsuario[propiedad] = valorNuevo;
    return Model.updateOne(
        {
            id: userID
        },
        nuevoUsuario
    );
}

function removeUser(userID) {
    // try {
    //     const res = await Model.deleteOne({ autor: 'Cata' });
    //     return res.deletedCount;
    // } catch (e) {
    //     console.log(e);
    // }
    return Model.deleteOne({ id: userID });
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser,
};