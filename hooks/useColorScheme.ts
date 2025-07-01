// src/hooks/useColorScheme.ts
import { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

export function useColorScheme(): NonNullable<ColorSchemeName> {
  const [scheme, setScheme] = useState<NonNullable<ColorSchemeName>>(
    Appearance.getColorScheme() ?? 'light'
  );

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setScheme(colorScheme ?? 'light');
    });
    return () => sub.remove();
  }, []);

  return scheme;
}
