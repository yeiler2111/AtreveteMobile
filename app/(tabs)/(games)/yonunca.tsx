
import Arrow from "@/assets/arrow";
import close from "@/assets/close.png";
import Dado from "@/assets/Dado";
import Btn from "@/components/Btn";
import ModalComponent from "@/components/Modal";
import { ThemedView } from "@/components/ThemedView";
import { contexto } from "@/context/ContextoGeneral";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


type PrevDaleProps = {
  navigation?: any;
};

const PrevDale = ({}: PrevDaleProps) => {
  const ctx = useContext(contexto);
  if (!ctx) throw new Error("ContextoGeneral no está disponible");
  const { retos, frases, escogerFraseAleatoria } = ctx;
  const [fraseActual, setFraseActual] = useState("");
  const [frasesUsadas, setFrasesUsadas] = useState<string[]>([]);
  const [retoActual, setRetoActual] = useState("");
  const [retosUsados, setretosUsados] = useState<string[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    escogerFraseAleatoria(
      frases,
      setFraseActual,
      setFrasesUsadas,
      frasesUsadas
    );
  }, []);

  const handleClick = (tipo: "juego" | "reto") => {
    switch (tipo) {
      case "juego":
        escogerFraseAleatoria(
          frases,
          setFraseActual,
          setFrasesUsadas,
          frasesUsadas
        );
        break;
      case "reto":
        escogerFraseAleatoria(
          retos,
          setRetoActual,
          setretosUsados,
          retosUsados
        );
        setModal(true);
        break;
      default:
        break;
    }
  };

  function goBack() {
     router.back();
  }

  return (
    <ThemedView style={{ flex: 1, backgroundColor: "#ff0000" }}>
      <Pressable
        style={({ pressed }) => [
          pressed ? { opacity: 0.7 } : { opacity: 1 },
          style.btnBack,
          { transform: [{ rotate: "180deg" }] },
        ]}
        onPress={goBack}
      >
        <Arrow height={100} width={100} />
      </Pressable>
      <View style={style.header}>
        <Dado width={100} height={100} />
        <Text style={style.tittle}>Yo Nunca</Text>
      </View>
      <View style={style.main}>
        <Text style={style.textMain}>{fraseActual}</Text>
      </View>
      <View style={style.footer}>
        <Btn
          color={"#927bea"}
          text={"Siguiente Turno"}
          callback={() => handleClick("juego")}
        />
        <Btn
          color={"#84b6f4"}
          text={"Reto"}
          callback={() => handleClick("reto")}
        />
      </View>
      {/*<BannerGame/>*/}
      <ModalComponent modal={modal} setModal={setModal}>
        <View style={style.modalContainer}>
          <View style={style.modal}>
            <Pressable
              style={({ pressed }) => [
                pressed ? { opacity: 0.7 } : { opacity: 1 },
                style.cerrar,
              ]}
              onPress={() => setModal(false)}
            >
              <Image
                source={close}
                style={{ width: 40, height: 40 }}
              />
            </Pressable>
            <Text style={style.textModal}>{retoActual}</Text>
          </View>
        </View>
      </ModalComponent>
    </ThemedView>
  );
};

export default PrevDale;

const style = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    flexDirection: "column",
    marginTop: 50,
  },
  tittle: {
    fontSize: 40,
    fontWeight: "800",
    color: "#ffff",
  },
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    height: 200,
    flex: 1,
  },
  textMain: {
    fontSize: 34,
    fontWeight: "600",
    color: "#ffff",
    textAlign: "center",
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 18,
    height: 200,
    marginBottom: 20,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(1,1,1,0.4)",
    padding: 12,
  },
  modal: {
    backgroundColor: "#ffff",
    height: 200,
    width: 310,
    borderRadius: 20,
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    position: "relative",
  },
  textModal: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  cerrar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    top: -25,
    right: -25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#fff",
  },
  btnBack: {
    height: 50,
    width: 100,
    borderRadius: 50,
    top: 50,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
