import { createApiRequest, checkToken, legacyRequests } from 'front-core/src/api'

const getApiRequests = (hosts) => {
  // TODO more safe (and move to helpers)
  const cfg = Object.keys(hosts)
    .reduce((acc, el) => ({
      ...acc,
      [el]: {
        key: el,
        url: hosts[el],
      },
    }), {})

  const requestUser = createApiRequest(cfg.api)
  const refreshToken = () => requestUser('Token.Refresh', null, true)
  const check = checkToken(refreshToken)

  const requestSmth = createApiRequest(cfg.api, { check })
  const requestLegacy = createApiRequest(cfg.api, { fetch: legacyRequests(cfg.api) })

  return {
    requestSmth,
    requestLegacy,
  }
}

export default getApiRequests
