import { useState, createContext } from "react";

export const MeuContexto = createContext()

export const MeuContextoProvider = ({ children }) => {
    const [mensagem, setMensagem] = useState("Mensagem inicial");

    const valorDoContexto = {
        mensagem,
        setMensagem,
    }

    return(
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    )
}