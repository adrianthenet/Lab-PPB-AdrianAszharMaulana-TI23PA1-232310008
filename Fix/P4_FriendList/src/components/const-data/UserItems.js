import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const UserItem = ({ item }) => {
  const imageUrl =
  item.gender === "M"
  ?"https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
  :"https://static.vecteezy.com/system/resources/previews/024/183/500/original/female-avatar-brunette-woman-portrait-illustration-of-a-female-character-in-a-modern-color-style-vector.jpg";
  return (
    <View style={styles.search_container}>
      <View style={styles.search_account}>
        <Image
          source={{uri: imageUrl}} style={styles.story_ava} />
        <View>
          <Text
            style={{ ...styles.story_name, fontWeight: "bold", color: "white" }}
          >
            {item.name}
          </Text>
          <Text style={{ ...styles.story_name, color: "white" }}>
            {item.fullname}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow}>
          <Text style={styles.story_name}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  search_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginRight: 15,
  },
  story_name: {
    fontSize: 16,
    textAlign: "left",
    color: "white",
  },
  btn_follow: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default UserItem;
