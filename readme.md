# React Native - Development

## Environment Setup:

**Install NodeJs LTS:**

- `winget install OpenJS.NodeJS.LTS`

**Install OpenJDK 11:**

- `winget install Microsoft.OpenJDK.11`

**Android Studio**

- Install the Android SDK (Android Studio SDK Manager)
- Configure the ANDROID_HOME environment variable: `%LOCALAPPDATA%\Android\Sdk`
- Add platform-tools to PATH environment variable: `%LOCALAPPDATA%\Android\Sdk\platform-tools`

**Install VsCode (Visual Studio Code)**

- VsCode Extensions:
  - ESLint
  - Preetier - Code formatter
  - Tailwind CSS IntelliSense

## Project Setup:

**Creating a new ReactNative app:**

Replace "MyApp" for the name of your app

```
npx react-native@latest init MyApp --template react-native-template-typescript
```

**Project dependencies**

- [ReactNative Navigation](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project)
- [ReactNative Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [NativeWind](https://www.nativewind.dev/quick-starts/react-native-cli)
- [Tailwindcss](https://tailwindcss.com/) as "dev" dependency

## Application Android Building:

**Android keystore:**

- Generate an Android keystore:

```
keytool -genkeypair -v -storetype PKCS12 -keystore test-app-key.keystore -alias test-app-key -keyalg RSA -keysize 2048 -validity 10000
```

- Copy the keystore file to: `android/app` folder

- Edit the file `android/gradle.properties`:

```properties
MYAPP_UPLOAD_STORE_FILE=test-app-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=test-app-key
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

- Adding signing config to your app's Gradle config, edit the file `android/app/build.gradle`:

```groovy
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

**Generating the release AAB**

Run the following in a terminal:

- To build AAB

```bash
  cd android
  ./gradlew bundleRelease
```

- To build APK

```bash
cd android
./gradlew assembleRelease
```

**Publish the release files**

- AAB is located on: `android/app/build/outputs/bundle/release/app-release.aab`
- APK is located on: `android/app/build/outputs/bundle/apk/release/app-release.apk`

---

- [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)
- [React Native - Publishing to Google Play Store](https://reactnative.dev/docs/signed-apk-android)
- [Tailwindcss - Estilizando interfaces com classes no React Native](https://youtu.be/KvM30zIJVyA)
- [How to add custom fonts in React Native](https://blog.logrocket.com/adding-custom-fonts-react-native)
