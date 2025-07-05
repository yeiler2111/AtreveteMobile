import Card from "@/components/Card";
import { contexto } from "@/context/ContextoGeneral";
import { useSound } from "@/hooks/useSound";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const ctx = useContext(contexto);
  if (!ctx) throw new Error("ContextoGeneral no está disponible");
  const { games, goToPage, setFrases, setRetos } = ctx;

  const sound = require("@/assets/sound/level-up.mp3");
  const player = useSound(sound);

  function handleGame(preguntas, penitencias, page) {
    player();
    setFrases(preguntas);
    setRetos(penitencias);
    goToPage(undefined, page);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={styles.header}>
        <Text style={styles.title}>Atrévete</Text>
        <Text style={styles.description}>Juega con tus amigos</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          {games.map((item) => (
            <Card
              text={item.name}
              callback={() =>
                handleGame(
                  item.preguntas,
                  item.penitencias,
                  item.page
                )
              }
              color={item.color}
              icon={item.icon}
              key={item.id.toString()}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    minWidth: 300,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#fff",
  },
  description: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
  },
  main: {
    minWidth: 300,
    minHeight: 300,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});

export default Home;
