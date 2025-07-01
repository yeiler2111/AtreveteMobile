import Arrow from "@/assets/arrow";
import Sex from "@/assets/Sex";
import Btn from "@/components/Btn";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
//import { BannerGame } from "../components/BannerGame";

import { contexto } from "@/context/ContextoGeneral";
import { useRouter } from "expo-router";

type DaleProps = {
  setModal: () => void;
};

const Dale = ({ setModal }: DaleProps) => {
  const ctx = useContext(contexto);
  if (!ctx) throw new Error("ContextoGeneral no está disponible");
  const { retos, frases, escogerFraseAleatoria } = ctx;
  const router = useRouter();
  const [categoria, setCategoria] = useState("Verdad");
  const [fraseActual, setFraseActual] = useState("");
  const [frasesUsadas, setFrasesUsadas] = useState<any[]>([]);
  const [retoActual, setRetoActual] = useState("");
  const [retosUsados, setretosUsados] = useState<any[]>([]);
  const [textMain, setTextMain] = useState("");
  //const [modal, setModal] = useState(false);

  // Solo mostrar una pregunta al entrar, según la categoría inicial
  useEffect(() => {
    if (categoria === "Verdad") {
      escogerFraseAleatoria(
        frases,
        setFraseActual,
        setFrasesUsadas,
        frasesUsadas
      );
    } else if (categoria === "Reto") {
      escogerFraseAleatoria(
        retos,
        setRetoActual,
        setretosUsados,
        retosUsados
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (tipo: "verdad" | "reto") => {
    if (tipo === "verdad") {
      escogerFraseAleatoria(
        frases,
        setFraseActual,
        setFrasesUsadas,
        frasesUsadas
      );
      setCategoria("Verdad");
    } else if (tipo === "reto") {
      escogerFraseAleatoria(
        retos,
        setRetoActual,
        setretosUsados,
        retosUsados
      );
      setCategoria("Reto");
    }
  };

  function goBack() {
    router.back();
  }

  return (
    <View style={style.container}>
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
        <Sex width={100} height={100} />
        <Text style={style.tittle}>{categoria}</Text>
      </View>
      <View style={style.main}>
        <View
          style={[
            style.mainCard,
            categoria == "Verdad"
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#F5EAEA" },
          ]}
        >
          <Text style={style.textMain}>
            {categoria == "Verdad" ? fraseActual : retoActual}
          </Text>
        </View>
      </View>
      <View style={style.footer}>
        <Btn
          color={"#38817A"}
          text={"Verdad"}
          callback={() => handleClick("verdad")}
        />
        <Btn
          color={"#0D63A5"}
          text={"Reto"}
          callback={() => handleClick("reto")}
        />
      </View>
      {/*<BannerGame/>*/}
    </View>
  );
};

export default Dale;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(251, 1, 1, 1)",
  },
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
  mainCard: {
    height: "60%",
    minWidth: 330,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  textMain: {
    fontSize: 24,
    fontWeight: "600",
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
