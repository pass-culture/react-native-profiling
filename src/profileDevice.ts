// main index.ts

import { NativeModules } from "react-native";

interface ProfilingInterface {
  profileDevice(
    orgId: string,
    fpServer: string,
    callback: (sessionId: string) => void,
    getSessionId?: Promise<{ sessionId: string }>,
    captureException?: (
      exception: unknown,
      captureContext?: Record<string, unknown>
    ) => void
  ): void;
}

export const Profiling:ProfilingInterface = NativeModules.Profiling;
