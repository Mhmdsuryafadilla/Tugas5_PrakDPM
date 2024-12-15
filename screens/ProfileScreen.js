import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"; 
const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("Muhammad Surya Fadilla");
  const [age, setAge] = useState("20 Tahun");
  const [university, setUniversity] = useState("Universitas Islam Riau");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    toggleModal(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Saya</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nama: {name}</Text>
        <Text style={styles.infoText}>Umur: {age}</Text>
        <Text style={styles.infoText}>Universitas: {university}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={toggleModal}>
        <Icon name="edit-2" size={24} color="#fff" />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nama"
            />
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Umur"
            />
            <TextInput
              style={styles.input}
              value={university}
              onChangeText={setUniversity}
              placeholder="Universitas"
            />

            <Button title="Save" onPress={handleSave} color="#6a4cfc" />
            <Button title="Cancel" onPress={toggleModal} color="gray" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f5ff",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6a4cfc",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  infoText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6a4cfc",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    fontSize: 16,
  },
});

export default ProfileScreen;
