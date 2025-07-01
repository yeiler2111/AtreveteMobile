import { retos, verdad } from "@/api/verdadOReto";
import { penitenciasYoNunca, yoNuncaNuncaFrases } from "@/api/yoNunca";
import Boca from "@/assets/Boca";
import Calabera from "@/assets/Calabera";
import { useRouter } from "expo-router";
import type { ReactElement } from "react";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

// Tipos para los juegos
type Game = {
  name: string;
  icon: ReactElement;
  id: string;
  page: string;
  color: string;
  preguntas: any[];
  penitencias: any[];
};

// Tipos para el contexto
type ContextoGeneralType = {
  goToPage: (navigation: any, page: string) => void;
  games: Game[];
  game: Game | null;
  setGame: Dispatch<SetStateAction<Game | null>>;
  frases: any;
  setFrases: Dispatch<SetStateAction<any>>;
  retos: any;
  setRetos: Dispatch<SetStateAction<any>>;
  escogerFraseAleatoria: (
    frases: any[],
    setFraseActual: Dispatch<SetStateAction<any>>,
    setFrasesUsadas: Dispatch<SetStateAction<any[]>>,
    frasesUsadas: any[]
  ) => void;
  users: any[];
  setUsers: Dispatch<SetStateAction<any[]>>;
};

export const contexto = createContext<ContextoGeneralType | undefined>(
  undefined
);

const games: Game[] = [
  {
    name: "Verdad o Reto",
    icon: <Boca width={100} heigth={100} />,
    id: "Verdad o Reto",
    page: "prevdale",
    color: "#EEEEEE",
    preguntas: verdad,
    penitencias: retos,
  },
  {
    name: "Yo Nunca",
    icon: <Calabera width={100} heigth={100} />,
    id: "yo nunca",
    page: "yonunca",
    color: "#EEEEEE",
    preguntas: yoNuncaNuncaFrases,
    penitencias: penitenciasYoNunca,
  },
];

type Props = {
  children: ReactNode;
};

const ContextoGeneral = ({ children }: Props) => {
  const [game, setGame] = useState<Game | null>(null);
  const [frases, setFrases] = useState<any>(null);
  const [retos, setRetos] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  function goToPage(_navigation: any, page: string) {
    if (page && page !== "") {
      router.push(`(tabs)/(games)/${page}` as any);
    } else {
      router.back();
    }
  }

  const escogerFraseAleatoria = (
    frases: any[],
    setFraseActual: Dispatch<SetStateAction<any>>,
    setFrasesUsadas: Dispatch<SetStateAction<any[]>>,
    frasesUsadas: any[]
  ) => {
    let frasesRestantes = frases.filter(
      (frase) => !frasesUsadas.includes(frase)
    );

    if (frasesRestantes.length === 0) {
      alert("¡No hay más frases disponibles!");
      return;
    }

    let nuevaFrase =
      frasesRestantes[Math.floor(Math.random() * frasesRestantes.length)];
    setFraseActual(nuevaFrase);
    setFrasesUsadas((prevFrasesUsadas) => [...prevFrasesUsadas, nuevaFrase]);
  };

  return (
    <contexto.Provider
      value={{
        goToPage,
        games,
        game,
        setGame,
        frases,
        setFrases,
        retos,
        setRetos,
        escogerFraseAleatoria,
        users,
        setUsers,
      }}
    >
      {children}
    </contexto.Provider>
  );
};

export default ContextoGeneral;
