import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import { Audio } from 'expo-av'
import * as VideoThumbnails from 'expo-video-thumbnails'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

export default function CameraScreen() {
  const [hasCameraPermissions, sethasCameraPermissions] = useState(false)
  const [hasAudioPermission, sethasAudioPermission] = useState(false)
  const [hasGalleryPermission, sethasGalleryPermission] = useState(false)
  
  const [galleryItems, setgalleryItems] = useState([])
  const [cameraRef, setCameraRef] = useState(null)
  const [cameraType, setcameraType] = useState(Camera.Constants.Type.back)
  const [cameraFlash, setcameraFlash] = useState(Camera.Constants.FlashMode.off)

  const [isCameraReady, setIsCameraReady] = useState(false)
  const isFocused = useIsFocused()

  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync()
        sethasCameraPermissions(cameraStatus.status == 'granted')

        const audioStatus = await Audio.requestPermissionsAsync()
        sethasAudioPermission(audioStatus.status == 'granted')

        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        sethasGalleryPermission(galleryStatus.status == 'granted')

        if( galleryStatus.status == 'granted' ) {
            const usergalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy : ['creationTime'], mediaType: ['video']})
            setgalleryItems(usergalleryMedia.assets)
        }
    })()
  }, [])
  const generateThumbnail = async (source) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        source,
        {
          time: 2000,
        }
      );
        return uri;
    } catch (e) {
      console.warn(e);
    }
  };
  const recordVideo = async () => {
    if (cameraRef) {
        try {
          const options = {maxDuration: 60, quality: Camera.Constants.VideoQuality['480']}
          const videoRecordPromise = cameraRef.recordAsync(options)
          if ( videoRecordPromise ) {
              const data = await videoRecordPromise;
              const source = data.uri
              let sourceThumb = await generateThumbnail(source)

              navigation.navigate('savePost', {source, sourceThumb })

          //todo: pass video uri into save component

          }     
        } catch (error) {
            console.log(error)
        }
    }
  }
  const stopVideo = async () => {
    if (cameraRef) {
        cameraRef.stopRecording()
    }
  }
  const pickFromGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          aspect: [16, 9],
          quality: 1
      })
      if(!result.cancelled){
          let sourceThumb = await generateThumbnail(result.uri)
          navigation.navigate('savePost', {source: result.uri, sourceThumb})
      }
  }
  if(!hasCameraPermissions || !hasAudioPermission || !hasGalleryPermission ){
      return (
          <View>

          </View>
      )
  }

  

  return (
    <View style={styles.container}>
      {isFocused? 
      <Camera 
        ref={ref=> setCameraRef(ref)}
        style={styles.camera}
        ratio={'16:9'}
        type={cameraType}
        flashMode={cameraFlash}
        onCameraReady={()=> setIsCameraReady(true)}
      /> : null}

      <View style={styles.sideBarContainer}>
        <TouchableOpacity style={styles.sideBarButton} onPress={()=> setcameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>
            <Feather name='refresh-ccw' size={24} color='white' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideBarButton} onPress={() => setcameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}>
            <Feather name='zap' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBarContainer}>
          <View style={{flex:1}}></View>
          <View style={styles.recordButtonContainer}>
            <TouchableOpacity 
              style={styles.recordButton}
              disabled={!isCameraReady}
              onLongPress={()=>recordVideo}
              onPressOut={() => stopVideo}
              />
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity 
              style={styles.galleryButton}
              onPress={ ()=> pickFromGallery() }
              >
                {galleryItems[0] == undefined ?
                  <></>:
                  <Image style={styles.galleryButtonImage} source={{uri: galleryItems[0].uri}}/>
                }

            </TouchableOpacity>
          </View>

      </View>
    </View>
  )
}