import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Bentuk Segitiga */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginBottom: 20,
        }}
      />

      {/* Bentuk Pil berisi NIM */}
      <View
        style={{
          backgroundColor: "green",
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          105841104722
        </Text>
      </View>

      {/* Persegi Panjang berisi Nama */}
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          width: 200,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          AGUSTIANA
        </Text>
      </View>
    </View>
  );
}