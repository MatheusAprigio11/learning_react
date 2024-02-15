import { ReactNode, createContext, useState } from "react";

type Tema = "claro" | "escuro";

interface TemaContexto {
	tema: Tema;
	alternarTema: () => void;
}

export const TemaContext = createContext<TemaContexto | null>(null);

interface TemaProviderProps {
	children: ReactNode;
}

export const TemaProvider = ({ children }: TemaProviderProps) => {
	const [tema, setTema] = useState<Tema>("claro");

	const alternarTema = () => {
		setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
	};

	return (
		<TemaContext.Provider value={{ tema, alternarTema }}>
			{children}
		</TemaContext.Provider>
	);
};
