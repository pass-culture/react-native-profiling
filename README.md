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

### Android, iOS and Web

```typescript
import Profiling from "@pass-culture/react-native-profiling";

Profiling.profileDevice(orgId, fbServer, setSessionId, getSessionId, captureException);
```

| **Arguments**      | **Type**                                                          | **Required** | **Description**                                             |
|--------------------|-------------------------------------------------------------------|--------------|-------------------------------------------------------------|
| `orgId`            | `string`                                                          | yes          | Id for the organization.                                    |
| `fbServer`         | `string`                                                          | yes          | Fb server URL.                                              |
| `setSessionId`     | `(sessionId: string) => void`                                     | yes          | callback can be used to get `sessionId`.                    |
| `getSessionId`     | `() => Promise<{ sessionId: string}>`                             | yes          | Async function returning promise with `{ sessionId }`.      |
| `captureException` | `(exception: unknown, context?: Record<string, unknown>) => void` | yes          | Usually a sentry client, to catch `error` from this module. |