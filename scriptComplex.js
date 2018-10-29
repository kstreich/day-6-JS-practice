/*Phone*/



let kimsPhone = {
  brand: "Google",
  model: "Pixel 2",
  operatingSystem: "Android 8.0.0",
  buttons: ["Power Button", "Volume Up", "Volume Down"],
  size: {
    heightInches: 5.74,
    widthInches: 2.74,
    depthInches: .31
  },
  weight: "143 grams",
  color: "Clearly White",
  waterResistant: true,
  camera: {
    back: {
      megaPixles: 12.2,
      aperture: "f/1.8",
      focus: "auto focus",
      cameraVideo: {
        quality: {
          1080: ["30 fps", "60 fps", "120 fps"],
          720: ["30 fps", "60 fps", "120 fps"],
          "4k": "30 fps",
          480: "not applicable"
        }
      }
    },
    front: {
      megaPixels: 8,
      aperture: "none",
      focus: "fixed focus",
      cameraVideo: {
        quality: {
          1080: "30 fps",
          720: "30 fps",
          "4k": "not supported",
          480: "30 fps"
        }
      }
    }
  },
  screenSizeMM: 127,
  currentBatteryLife: "64%",
  amountOfMemory: "128 gb",
  usedMemoryTotal: "61.59 gb",
  usedMemory: {
    photos: {
      photosApp: "1.18 gb",
      lightRoomCC: "470 mb",
      camera: "450 mb",
      snapseed: "53.88 mb",
      layout: "12.80 mb",
      images: "30.11 gb"
    },
    music: {
      googlePlayMusic: "1.63 gb",
      amazonMusic: "451 mb",
      pandora: "108 mb",
      metronome: "43.53 mb",
      audioFiles: "5.07 gb"
    }
  }
}
