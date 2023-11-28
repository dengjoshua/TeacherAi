import React, { useState, useEffect } from "react";
import { Button, Image, View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Photo() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [showcamera, setShowCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === "granted");

      if (galleryStatus.status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data);
      setImageUri(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  if (cameraPermission === null || galleryPermission === null) {
    return <View />;
  }
  if (cameraPermission === false || galleryPermission === false) {
    return <Text>No access to camera or gallery</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {showcamera && (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              height: "100%",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={() => takePicture()}
            >
              <MaterialCommunityIcons
                name="image"
                color="#fff"
                size={30}
                onPress={pickImage}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 0.5 }} />}
      <MaterialCommunityIcons
        name="camera"
        size={30}
        onPress={() => setShowCamera(true) || console.log("clicked")}
      />
    </View>
  );
}
