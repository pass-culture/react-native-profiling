# @pass-culture/react-native-profiling

## Installation

`$ yarn add @pass-culture/react-native-profiling`

### Android

In your `android/build.gradle`, add in the repositories section:

```kotlin
flatDir {
    dirs project( ':@pass-culture_react-native-profiling' ).file( 'libs' )
}
```

In your `android/settings.gradle`, add:

```kotlin
include ':@pass-culture_react-native-profiling'
project(':@pass-culture_react-native-profiling').projectDir = new File(rootProject.projectDir, '../node_modules/@pass-culture/react-native-profiling/android')
```

### iOS

Add the xcframeworks to the Frameworks of your application. Make sure they are embedded and signed.

## Usage

```typescript
import Profiling from "@pass-culture/react-native-profiling";

Profiling.profileDevice(ordId, fbServer, (sessionId) => console.log(sessionId));
```
