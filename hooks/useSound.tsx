// hooks/useSound.ts
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useSound = (soundFile: any) => {
    const [sound, setSound] = useState<Audio.Sound>();

    async function playSound() {
        try {
            const { sound: soundObject } = await Audio.Sound.createAsync(soundFile);
            setSound(soundObject);
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error al reproducir sonido:', error);
        }
    }

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

    return playSound;
};