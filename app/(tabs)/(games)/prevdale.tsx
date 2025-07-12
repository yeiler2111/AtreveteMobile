import Sex from "@/assets/Sex";
import { BannerGame } from "@/components/BannerGame";
import Btn from "@/components/Btn";
import { usePrevDaleLogic } from "@/hooks/usePrevDale";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type DaleProps = {
  setModal: () => void;
};

const Dale = ({ setModal }: DaleProps) => {
  const { top, bottom } = useSafeAreaInsets();
  const { 
    categoria, 
    fraseActual, 
    retoActual, 
    handleClick, 
    goBack 
  } = usePrevDaleLogic();

  return (
    <View style={[style.container, { paddingTop: top, paddingBottom: bottom }]}>
      {/* Botón de regresar */}
      <Pressable
        style={({ pressed }) => [
          pressed ? { opacity: 0.7 } : { opacity: 1 },
          style.btnBack,
          { transform: [{ rotate: "180deg" }] },
        ]}
        onPress={goBack}
      >
        <FontAwesome name="arrow-right" size={35} color="white" />
      </Pressable>

      {/* Encabezado */}
      <View style={style.header}>
        <Sex width={100} height={100} />
        <Text style={style.tittle}>{categoria}</Text>
      </View>

      {/* Contenido principal */}
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
        <BannerGame/>
      </View>

      {/* Botón de siguiente */}
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
    height: "auto",
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
    padding: 8,
    height: 200,
    flex: 1,
    paddingHorizontal: 12,
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