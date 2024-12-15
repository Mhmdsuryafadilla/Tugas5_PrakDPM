import React from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const DashboardScreen = ({ navigation }) => {
  const menuItems = [
    { id: "1", title: "Profile", icon: "user", screen: "Profile" },
    { id: "2", title: "Detail Profile", icon: "info", screen: "Details" },
    { id: "3", title: "More Info", icon: "link", screen: "MoreInfo" }, 
  ];

  const handleMoreInfo = () => {
    Linking.openURL('https://www.instagram.com/sluyrbae_?igsh=em5wMXR5cDBkaGNt')
      .catch((err) => console.error("An error occurred", err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => item.id === "3" ? handleMoreInfo() : navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={24} color="#fff" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Selamat datang di tugas saya, banh!</Text>
      </View>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", 
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6a4cfc", 
  },
  list: {
    padding: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 20,
    backgroundColor: "#6a4cfc",
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cardText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default DashboardScreen;
