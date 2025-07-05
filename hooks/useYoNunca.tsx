// hooks/useYoNuncaLogic.ts
import { contexto } from '@/context/ContextoGeneral';
import { router } from 'expo-router';
import { useCallback, useContext, useEffect, useState } from 'react';

export const useYoNuncaLogic = () => {
    const ctx = useContext(contexto);
    if (!ctx) throw new Error("ContextoGeneral no está disponible");
    const { retos, frases, escogerFraseAleatoria } = ctx;

    const [fraseActual, setFraseActual] = useState("");
    const [frasesUsadas, setFrasesUsadas] = useState<string[]>([]);
    const [retoActual, setRetoActual] = useState("");
    const [retosUsados, setRetosUsados] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    // Cargar frase inicial al montar el componente
    useEffect(() => {
        escogerFraseAleatoria(
            frases,
            setFraseActual,
            setFrasesUsadas,
            frasesUsadas
        );
    }, []);

    // Manejar clicks en los botones
    const handleClick = useCallback((tipo: "juego" | "reto") => {
        if (tipo === "juego") {
            escogerFraseAleatoria(
                frases,
                setFraseActual,
                setFrasesUsadas,
                frasesUsadas
            );
        } else if (tipo === "reto") {
            escogerFraseAleatoria(
                retos,
                setRetoActual,
                setRetosUsados,
                retosUsados
            );
            setModalVisible(true);
        }
    }, [frases, retos, frasesUsadas, retosUsados, escogerFraseAleatoria]);

    // Navegar hacia atrás
    const goBack = useCallback(() => {
        router.back();
    }, []);

    // Cerrar modal
    const closeModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    return {
        fraseActual,
        retoActual,
        modalVisible,
        handleClick,
        goBack,
        closeModal,
    };
};