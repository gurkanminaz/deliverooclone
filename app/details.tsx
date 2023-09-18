import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@components/ParallaxScrollView";
import Colors from "@constants/Colors";
import { restaurant } from "@assets/data/restaurant";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    console.log("Details");
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTinColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      hederRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.roundButton}
          >
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.roundButton}
          >
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        backgroundColor={Colors.white}
        parallaxHeaderHeight={250}
        style={{ flex: 1 }}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ width: "100%", height: 300 }}
          />
        )}
        contentBackgroundColor={Colors.lightGrey}
        stickyHeaderHeight={100}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text>Details</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: Colors.white,
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    fontSize: 20,
    margin: 10,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default Details;
