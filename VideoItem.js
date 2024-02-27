import { StyleSheet, Text, View, Image, Share } from "react-native";
import React from "react";
import Video from "react-native-video";
import { windowHeight, windowWidth } from "./data";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
// import { Constants, Video } from "react-native-video";

export default function VideoItem({ data }) {
  const { uri, caption, channelName, musicName, likes, comments, avatarUri } =
    data;
  const bottomTabHeight = useBottomTabBarHeight();
  return (
    <View
      style={(styles.container, { height: windowHeight - bottomTabHeight })}
    >
      <Video source={{ uri }} styles={styles.video} resizeMode="cover" />;
      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>{channelName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require("./assets/images/music-note.png")}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Image
            source={require("./assets/images/disc.png")}
            style={styles.musciDisc}
          />
        </View>
      </View>
      <View style={styles.verticalBar}>
        <View style={(styles.verticalBarItem, styles.avatarContainer)}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
          <View style={styles.followButton}>
            <Image
              source={require("./assets/images/plus-button.png")}
              style={styles.followIcon}
            />
          </View>
        </View>

        <View style={styles.verticalBarItem}>
          <Image
            source={require("./assets/images/heart.png")}
            style={styles.verticalBarIcon}
          />
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            source={require("./assets/images/message-circle.png")}
            style={styles.verticalBarIcon}
          />
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            source={require("./assets/images/reply.png")}
            style={styles.verticalBarIcon}
          />
          {/* <Text style={styles.verticalBarText}>{share}</Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  //bottomSection
  bottomSection: {
    position: "absolute",
    bottom: "0",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  channelName: {
    color: "white",
    fontWeight: "bold",
  },
  caption: {
    color: "white",
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: "white",
  },
  musciDisc: {
    width: 40,
    height: 40,
  },
  //verticalBar
  verticalBar: {
    position: "absolute",
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignContent: "center",
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: "white",
    marginTop: 4,
  },
  //avatar
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: "absolute",
    bottom: -8,
    width: 16,
    height: 16,
  },
  followIcon: {
    width: 21,
    hight: 21,
  },
});
