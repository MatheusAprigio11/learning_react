import { useEffect, useState } from "react";

import axios from "axios";

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
const ExibirPostagens = () => {
	const [posts, setPost] = useState<Post[]>([]);
	const [carregando, setCarregando] = useState(false);

	useEffect(() => {
		const buscarPostagens = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts"
				);
				setPost(response.data.slice(0, 5));
			} catch (error) {
				console.log(error);
			} finally {
				setCarregando(false);
			}
		};
		buscarPostagens();
	}, []);

	return (
		<div>
			<h2>Lista de postagens</h2>
			{carregando ? (
				<p>Carregando posts....</p>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ExibirPostagens;
