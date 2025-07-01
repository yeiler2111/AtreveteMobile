import { GAME_ROUTES, GamePage } from "@/constants/routes";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const Games = () => {
  const router = useRouter();
  const segments = useSegments();
  const page = segments[segments.length - 1];

  useEffect(() => {
    if (typeof page === "string" && GAME_ROUTES.includes(page as GamePage)) {
      switch (page) {
        case "prevdale":
          router.replace("/(tabs)/(games)/prevdale");
          break;
        case "yonunca":
          router.replace("/(tabs)/(games)/yonunca");
          break;
        default:
          router.replace("/(tabs)");
      }
    } else {
      router.replace("/(tabs)");
    }
  }, [page]);

  return null;
};

export default Games;
