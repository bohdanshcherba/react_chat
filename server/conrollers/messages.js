import messages from "../data/messages.js";
import getCurrentDate from '../helpers/getCurrentDate.js'

const getAll = (req, res) => {
    try {
        res.status(200).send(messages)

    } catch (err) {
        res.status(500).send(err)
    }
}

const sendMessage = (req, res) => {

    const postData = {
        user: req.body.user,
        userId: req.body.userId,
        text: req.body.text,
        createdAt: req.body.createdAt
    }
    const lastId = messages[messages.length - 1]?.id || 0

    if (postData.user && postData.user && postData.userId) {

        const message = {
            id: lastId + 1,
            userId: postData.userId,
            avatar: "",
            user: postData.user,
            text: postData.text,
            createdAt: postData.createdAt,
            editedAt: ''
        }
        messages.push(message)

        try {
            res.status(201).send(message)

        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.send(400)
    }

}

const updateMessage = (req, res) => {

    const id = req.params.id
    const postData = {
        text: req.body.text

    }


    if (postData.text) {
        const index = messages.findIndex(mes => mes.id == id)

        if (index === -1) {

            res.status(404).send('message not found')
        } else {
            messages[index].text = postData.text
            messages[index].editedAt = getCurrentDate()
            return res.status(200).send(messages[index])
        }
    }else {
        res.status(400)


    }



}

const deleteMessage = (req, res) => {
    const id = req.params.id
    const index = messages.findIndex(mes => {
        return mes.id == id
    })

    if (index === -1) {

        res.status(404).send('message not found')
    } else {
        messages.splice(index, 1)
        res.status(200).send(messages)
    }


}

const getById = (req, res) => {
    const id = req.params.id

    const founded = messages.find(e => {
        return e.id === id
    })

    if (founded) {
        res.status(200).send(founded)
    } else {
        res.status(404).send('Not Found')
    }

}

export {getAll, sendMessage, updateMessage, deleteMessage}
