import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { mahasiswa } from "../../../data/mahasiswa";

export default function UserPage() {
  const { id } = useLocalSearchParams();
  const user = useMemo(() => mahasiswa.find((mhs) => mhs.id === id), [id]);

  if (!user) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Mahasiswa tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <View style={styles.header}>
        
      </View>

      {/* Foto Profil */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.foto_simak }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.desc}>Mahasiswa Informatika</Text>
      </View>

      {/* Data Pribadi */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Data Pribadi</Text>
        <View style={styles.cardContent}>
          <Text style={styles.detail}>
            <Text style={styles.label}>Nama Lengkap:</Text> {user.name}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>NIM:</Text> {user.nim}
          </Text>
        </View>
      </View>

      {/* Informasi Akademik */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informasi Akademik</Text>
        <View style={styles.cardContent}>
          <Text style={styles.detail}>
            <Text style={styles.label}>Kelas:</Text> 6B
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Fakultas:</Text> Teknik
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Jurusan:</Text> Informatika
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D1975",
    paddingVertical: 50,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -40,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D1975",
    marginTop: 12,
  },
  desc: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D1975",
    marginBottom: 8,
  },
  cardContent: {
    gap: 6,
  },
  detail: {
    fontSize: 16,
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    color: "#000",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});