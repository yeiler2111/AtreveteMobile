import Btn from "@/components/Btn";
import ModalComponent from "@/components/Modal";
import Screen from "@/components/Screen";
import { contexto } from "@/Context/ContextoGeneral";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dale from "./Dale";

const SelectPlayer = ({ navigation }) => {
  const { users, setUsers, goToPage } = useContext(contexto);
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isSelecting && users.length > 0) {
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * users.length);
        setCurrentItem(users[randomIndex]);
      }, 50); // Cambia la velocidad de cambio aquí

      setTimeout(() => {
        clearInterval(intervalId);
        const finalIndex = Math.floor(Math.random() * users.length);
        setSelectedItem(users[finalIndex]);
        setIsSelecting(false);
      }, 3000); // Cambia el tiempo total aquí

      setTimeout(() => {
        setModal(true);
      }, 4000); // tiempo para abrir el modal de verdad o reto
    }

    return () => clearInterval(intervalId);
  }, [isSelecting, users]);

  const startSelection = () => {
    setSelectedItem(null);
    setIsSelecting(true);
  };

  return (
    <Screen colors={["#ff0000", "#bd0003", "#7f0000"]}>
      <View style={styles.container}>
        <View style={styles.viewCentral}>
          <Text style={styles.tittle}>Jugador</Text>
          {selectedItem == null ? (
            <Text style={styles.text}>
              {currentItem == null ? "Selecionado" : currentItem}
            </Text>
          ) : (
            selectedItem && <Text style={styles.text}>{selectedItem}</Text>
          )}
          <Btn
            text={"Deleccionar Jugador"}
            callback={startSelection}
            color={"#03001C"}
          />
        </View>
      </View>
      <ModalComponent modal={modal} setModal={setModal}>
        <Dale setModal={() => setModal(false)} />
      </ModalComponent>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    margin: 10,
    fontWeight: "800",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    color: "#03001C",
  },
  tittle: {
    fontSize: 38,
    fontWeight: "900",
  },
  viewCentral: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 300,
    gap: 10,
  },
});

export default SelectPlayer;
