const users = []

const addUser = ({ id, username, room }) => {
    //Clean the Data
    username = username.trim().toUpperCase()
    room = room.trim().toUpperCase()

    //Validate the data
    if (!username || !room) {
        return {
            Error: "Username and Room are Required!"
        }
    }

    //Check for Existing User
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate Username
    if (existingUser) {
        return {
            Error: "Username is in Use"
        }
    }

    //Store User
    const user = {
        id,
        username,
        room
    }
    users.push(user)

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const found = users.find((user) => {
        return user.id === id
    })
    return found
}

const getUsersInRoom = (room) => {
    room = room.trim().toUpperCase()
    return users.filter((user)=>{
        return user.room === room
    })
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}