import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function SearchScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.helpContainer}>
        <Pressable style={styles.helpLink} onPress={() => router.back()}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Enter something in the search bar above, and click this sentence while searching to reproduce the bug
          </Text>
        </Pressable>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
