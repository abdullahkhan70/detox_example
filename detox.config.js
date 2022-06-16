module.exports = {
  // testRunner: "jest",
  // runnerConfig: "e2e/config.json", // specify the path to your runner's configuration
  // runnerConfig:
  //   process.env.DETOX_EXPOSE_GLOBALS === "0"
  //     ? "e2eExplicitRequire/config.json"
  //     : "e2e/config.json",
  "test-runner": "mocha",
  "runner-config": "e2e/.mocharc.json",
  specs:
    process.env.DETOX_EXPOSE_GLOBALS === "0" ? "e2eExplicitRequire" : "e2e",
  behavior: {
    init: {
      exposeGlobals: process.env.DETOX_EXPOSE_GLOBALS === "0" ? false : true,
    },
  },
  configurations: {
    "ios.sim.debug": {
      binaryPath:
        "ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app",
      build:
        "xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      type: "ios.simulator",
      device: {
        type: "iPhone 12 Pro",
      },
    },
    "android.emu.debug": {
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "cd android && gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      type: "android.attached",
      device: {
        adbName: "2XJDU17803001572",
      },
    },
  },
};
