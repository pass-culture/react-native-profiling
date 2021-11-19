// main index.ts

import { NativeModules } from "react-native";

interface ProfilingInterface {
  profileDevice(
    orgId: string,
    fpServer: string,
    callback: (sessionId: string) => void
  ): void;
}

export const Profiling:ProfilingInterface = NativeModules.Profiling;
