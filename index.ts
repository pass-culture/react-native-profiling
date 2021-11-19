import { Platform } from "react-native";
import { Profiling as ProfilingDefault } from "./src/profileDevice";

const Profiling = {
  profileDevice: (
    orgId: string,
    fpServer: string,
    callback: (sessionId: string) => void,
    getSessionId: () => Promise<{ sessionId: string }>,
    captureException: (
      exception: unknown,
      captureContext?: Record<string, unknown>
    ) => void
  ) => {
    if (Platform.OS === 'web') {
      // @ts-ignore The web interface is different but IDE check native one
      // eslint-disable-next-line
      ProfilingDefault.profileDevice(orgId, fpServer, callback, getSessionId, captureException)
      return
    }
    ProfilingDefault.profileDevice(orgId, fpServer, callback)
  }
}

export default Profiling
