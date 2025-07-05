// hooks/useDaleLogic.ts
import { contexto } from '@/context/ContextoGeneral';
import { useRouter } from 'expo-router';
import { useCallback, useContext, useEffect, useState } from 'react';

type UsePrevDaleLogicProps = {
    initialCategory?: 'Verdad' | 'Reto';
};

export const usePrevDaleLogic = ({ initialCategory = 'Verdad' }: UsePrevDaleLogicProps = {}) => {
    const ctx = useContext(contexto);
    if (!ctx) throw new Error("ContextoGeneral no está disponible");
    const { retos, frases, escogerFraseAleatoria } = ctx;
    const router = useRouter();

    const [categoria, setCategoria] = useState<'Verdad' | 'Reto'>(initialCategory);
    const [fraseActual, setFraseActual] = useState("");
    const [frasesUsadas, setFrasesUsadas] = useState<any[]>([]);
    const [retoActual, setRetoActual] = useState("");
    const [retosUsados, setRetosUsados] = useState<any[]>([]);

    // Función para manejar el cambio de categoría
    const handleClick = useCallback((tipo: 'verdad' | 'reto') => {
        if (tipo === 'verdad') {
            escogerFraseAleatoria(
                frases,
                setFraseActual,
                setFrasesUsadas,
                frasesUsadas
            );
            setCategoria('Verdad');
        } else if (tipo === 'reto') {
            escogerFraseAleatoria(
                retos,
                setRetoActual,
                setRetosUsados,
                retosUsados
            );
            setCategoria('Reto');
        }
    }, [frases, retos, frasesUsadas, retosUsados, escogerFraseAleatoria]);

    // Función para navegar atrás
    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    // Efecto inicial para cargar la primera frase/reto
    useEffect(() => {
        if (initialCategory === 'Verdad') {
            escogerFraseAleatoria(
                frases,
                setFraseActual,
                setFrasesUsadas,
                frasesUsadas
            );
        } else if (initialCategory === 'Reto') {
            escogerFraseAleatoria(
                retos,
                setRetoActual,
                setRetosUsados,
                retosUsados
            );
        }
    }, [initialCategory, frases, retos, escogerFraseAleatoria]);

    return {
        categoria,
        fraseActual,
        retoActual,
        handleClick,
        goBack,
    };
};