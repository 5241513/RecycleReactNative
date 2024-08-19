### README

# Graduation Project App

This project is a React Native application utilizing various libraries to enhance its functionality. Follow the instructions below to set up and run the project.

## Installation Instructions

1. **Install the required packages:**
   ```sh
   npm i react-native-gifted-charts
   npm i react-native-linear-gradient
   npm i react-native-svg
   npm i @react-navigation/native
   npm i @react-navigation/stack
   npm i react-native-screens
   npm i react-native-safe-area-context
   npm i @react-navigation/bottom-tabs
   npm i --save-dev @types/react-native-vector-icons
   npm i react-native-toast-message
   npm i react-native-vision-camera
   npm i react-native-paper
   npm i react-native-image-picker
   npm i @react-native-async-storage/async-storage
   npm i @react-navigation/material-top-tabs react-native-tab-view
   npm i react-native-app-intro-slider
   npm install react-native-permissions
   npm i react-native-gesture-handler
   npm i react-native-keychain
   ```

2. **Add the following code snippet at the bottom of the file `android/app/build.gradle`:**
   ```gradle
   apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
   ```

3. **Add required permissions:**
   In the `AndroidManifest.xml` file, inside the `<manifest>` tag, add the following lines:
   ```xml
   <!--取得影像-->
   <uses-permission android:name="android.permission.CAMERA"/>
   <uses-permission android:name="android.permission.RECORD_AUDIO"/>
   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
   <!--取得影像-->
   ```
4. **Import the project in `index.js`:**
   In the `index.js` file, add the following import statement:
   ```javascript
   import Project from './Graduation-Project-App';
   ```

## Additional Information

Ensure you have all necessary environment setups like Android SDK, Node.js, and other dependencies required for React Native development.

For any issues, refer to the documentation of the respective libraries or seek help from their communities.

---

This README provides a step-by-step guide for setting up the Graduation Project App, making sure that the necessary configurations and dependencies are properly installed and configured.

