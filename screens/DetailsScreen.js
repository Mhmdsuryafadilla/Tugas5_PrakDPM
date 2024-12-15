import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const DetailsScreen = () => {
  const handleLikeProfile = () => {
    alert("Profil Disukai!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detail Profile</Text>

      <Text style={styles.description}>
        Nama saya Muhammad Surya Fadilla, saya berusia 20 tahun dan saat ini
        sedang berkuliah di Universitas Islam Riau. Saya memiliki beberapa hobi,
        salah satunya adalah menggambar, yang memberi saya kesempatan untuk
        mengekspresikan diri secara kreatif. Selain itu, saya juga suka berenang
        karena itu membantu saya merasa lebih segar dan aktif. Saya adalah orang
        yang suka mencoba hal-hal baru, selalu mencari pengalaman dan tantangan
        yang berbeda untuk memperluas wawasan saya. Saya percaya dengan terus
        mencoba hal-hal baru, saya bisa terus berkembang dan menemukan potensi
        diri yang belum saya ketahui.
      </Text>

      <TouchableOpacity style={styles.editButton} onPress={handleLikeProfile}>
        <Icon name="thumbs-up" size={24} color="#fff" />
        <Text style={styles.editButtonText}>Sukai Profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f5ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6a4cfc", 
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 30,
    textAlign: "justify", 
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6a4cfc",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  editButtonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default DetailsScreen;
