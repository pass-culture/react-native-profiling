import { bnhd } from './web/bnhd'

interface ProfilingInterface {
  profileDevice(
    orgId: string,
    fpServer: string,
    callback: (sessionId: string) => void,
    getSessionId?: () => Promise<{ sessionId: string }>,
    captureException?: (
      exception: unknown,
      captureContext?: Record<string, unknown>
    ) => void
  ): void
}

const profileDevice = async (
  orgId: string,
  fpServer: string,
  callback: (sessionId: string) => void,
  getSessionId: () => Promise<{ sessionId: string }>,
  captureException: (
    exception: unknown,
    captureContext?: Record<string, unknown>
  ) => void
) => {
  getSessionId()
    .then(({ sessionId }: { sessionId: string }) => {
      if (!sessionId) {
        captureException(
          'GET /native/v1/user_profiling/session_id did not return a sessionId: profiling skipped'
        )
        return
      }
      bnhd.pfpc(fpServer, orgId, sessionId)
      callback(sessionId)
    })
    .catch(captureException)
}

export const Profiling: ProfilingInterface = {
  profileDevice,
}
