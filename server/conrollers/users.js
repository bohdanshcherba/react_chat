import users from '../data/users.js'

const getAll = (req, res) => {
    try {
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }


}

const createUser = (req, res) => {

    const postData = {
        username: req.body.username,
        password: req.body.password
    }
    const lastId = users[users.length - 1]?.id || 0

    if (postData.password && postData.username) {

        if (users.find(user => user.username === postData.username)) {
            return res.status(400).send('username exist')
        }

        const user = {
            id: lastId + 1,
            username: postData.username,
            avatar: "",
            password: postData.password

        }
        users.push(user)
        try {
            res.status(201).send(user)

        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.send(400)
    }

}

const updateUser = (req, res) => {
    const id = req.params.id

    const postData = {
        username: req.body.username,
        password: req.body.password
    }
    if (users.find(user => user.username === postData.username)) {
        return res.status(400).send('username exist')
    }

    if (postData.password || postData.username) {
        const index = users.findIndex(user => user.id == id)

        console.log(index)
        if (index === -1) {

            return res.status(404).send('user not found')
        }
            else {
            users[index].username = postData.username || users[index].username
            users[index].password = postData.password || users[index].password
        }

    }


    res.status(200).send(users)
}

const deleteUser = (req, res) => {
    const id = req.params.id
    if (id > -1 && id < users.length) {
        users.splice(id, 1);

        res.status(200).send(users)
    }
    else {
        res.send(404)
    }

}

const login = async (req, res) => {

    const postData = {
        username: req.body.username,
        password: req.body.password
    }

    if (!postData.username || !postData.password) {
        res.status(400).send(JSON.stringify("email or password is empty"))
    } else {


        let user = users.find(user => user.username === postData.username)

        if (!user) {
            res.status(404).send("User not found")
        } else {
            if (user.password !== postData.password) {
                res.status(400).send('password incorrect')
            } else {
                res.send(JSON.stringify(user))
            }

        }
    }


}

export {getAll, login, createUser, updateUser, deleteUser}
