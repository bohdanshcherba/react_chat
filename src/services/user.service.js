const url = "http://localhost:3001"

class User {

    login = async (data) => {
        return await fetch(`${url}/login`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())


    }

    getAll = async () => {
        return await fetch(`${url}/users`).then(res => res.json())

    }

    create = async (data) =>{

        return await fetch(`${url}/user`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())

    }

    update = async (data,id) =>{
        return await fetch(`${url}/user/${id}`, {
            method: 'PUT',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())

    }
    delete = async (id) => {
        console.log(id)
        return await fetch(`${url}/user/${id}`,{
            method: 'DELETE',

            }
        ).then(res => res.json())

    }

}

export {User}
