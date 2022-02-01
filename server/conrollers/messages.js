import message from '../data/messages.js'


const getAll = (req,res) =>{
    res.status(200).send(message)
}

const getById = (req,res)=>{
    const id = req.params.id

    const founded = message.find(e=>{return e.id === id})

    if (founded){
        res.status(200).send(founded)
    }else {
        res.status(404).send('Not Found')
    }

}

export {getAll,getById}
