import { useState } from 'react'

const UserInfoForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault();

        //acessa API via fetch ou axios, não permite que o navegador recarregue ao enviar algum dado e etc.
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Digite o seu nome'/>
                <button type="submit">Enviar</button>
                
                <input type='text' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Digite o seu email'/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default UserInfoForm