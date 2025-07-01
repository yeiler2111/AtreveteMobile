import close from "@/assets/close.png";
import Btn from "@/components/Btn";
import ModalComponent from "@/components/Modal";
import { ThemedView } from "@/components/ThemedView";
import { contexto } from "@/context/ContextoGeneral";
import { useContext, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const PrevDale = ({ navigation }) => {
  const { users, setUsers, goToPage } = useContext(contexto);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  function addName(name) {
    if (name != "" || name != " ") {
      if (users.length != 0) {
        setUsers([...users, name]);
      } else {
        setUsers([name]);
      }
      setName("");
    }
  }
  function nextPage() {
    if (users.length != 0 && users.length != 1)
      goToPage(navigation, "SelectPlayer");
    else {
      Alert.alert("Debe haber minimo 2 jugadores");
    }
  }
  return (
    <ThemedView style={{ flex: 1, backgroundColor: "#ff0000" }}>
      <View style={styles.screen}>
        <Text style={styles.textTittle}>Ingresa los jugadores</Text>
        <View style={styles.containerText}>
          {users.map((e, i) => {
            return (
              <Text style={styles.text} key={i}>
                {e}
              </Text>
            );
          })}
        </View>
        <Btn
          callback={() => setModal(true)}
          text={"Agregar Jugador"}
          color={"#0D43A7"}
        />
        <Btn callback={nextPage} text={"Iniciar Juego"} color={"#0D43A7"} />
      </View>
      <ModalComponent modal={modal} setModal={setModal}>
        <View style={styles.modal}>
          <View style={styles.containerMessage}>
            <Text style={styles.label}>Nuevo Jugador:</Text>
            <TextInput
              placeholder="Ingresa tu nombre"
              onChangeText={(string) => setName(string)}
              style={styles.input}
              value={name}
            />
            <Btn
              callback={() => addName(name)}
              text={"Añadir"}
              color={"#0D43A7"}
            />
            <Pressable
              style={({ pressed }) => [
                pressed ? { opacity: 0.7 } : { opacity: 1 },
                styles.cerrar,
              ]}
              onPress={() => setModal(false)}
            >
              <Image height={"100%"} source={close} />
            </Pressable>
          </View>
        </View>
      </ModalComponent>
    </ThemedView>
  );
};

export default PrevDale;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  textTittle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
  },
  containerText: {
    width: "100%",
    padding: 20,
  },
  text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
  },
  //Modal
  modal: {
    backgroundColor: "rgba(1,1,1,0.3)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerMessage: {
    height: 220,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "relative",
  },
  input: {
    height: 60,
    width: "90%",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 14,
    padding: 10,
    fontSize: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
  },
  cerrar: {
    position: "absolute",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -20,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: 80,
  },
});
