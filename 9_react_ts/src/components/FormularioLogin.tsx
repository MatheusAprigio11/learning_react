import { useState } from "react";

const FormularioLogin = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");


	const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    alert(`Login efetuado para : ${username}, com a senha ${password}`)
  };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Nome de usuario: </label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Senha: </label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
        <button type="submit">logar</button>
			</form>
		</div>
	);
};

export default FormularioLogin;
