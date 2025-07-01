// constants/routes.ts

export const GAME_ROUTES = ["prevdale", "yonunca"] as const;
export type GamePage = typeof GAME_ROUTES[number];
