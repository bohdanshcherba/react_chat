const url = "http://localhost:3001"

class Chat {
    getAllMessages = async () => {

        return await fetch(`${url}/chat/messages`).then(res => res.json())

    }

    sendMessage = async (data)=>{
        return await fetch(`${url}/chat/message`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())
    }

    updateMessage = async (id,text) => {


        return await fetch(`${url}/chat/message/${id}`, {
            method: 'PUT',

            body: JSON.stringify({"text": text}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())

    }

    delete = async (id) => {
        return await fetch(`${url}/chat/message/${id}`,{
                method: 'DELETE',

            }
        ).then(res => res.json())

    }
}

export {Chat}
