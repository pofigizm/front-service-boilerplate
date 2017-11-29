import { createApiRequest, checkToken, restRequests } from 'front-core/src/api'

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

  const requestJsonrpc = createApiRequest(cfg.api, { check })
  const requestRest = createApiRequest(cfg.api, { fetch: restRequests(cfg.api) })

  return {
    requestJsonrpc,
    requestRest,
  }
}

export default getApiRequests
