import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { mahasiswa } from "../../data/mahasiswa";

export default function TabMahasiswa() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerTitle}>Daftar Mahasiswa</Text>
        <Text style={styles.headerSubtitle}>Semester 6 - Kelas B</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        {mahasiswa.map((mhs) => (
          <Link key={mhs.id} href={`/user/${mhs.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: mhs.foto_simak }} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{mhs.name}</Text>
                <Text style={styles.nim}>{mhs.nim}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6f8",
  },
  headerBackground: {
    backgroundColor: "#0000FF",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  nim: {
    fontSize: 14,
    color: "#777",
  },
});