import React from 'react'
import { root } from 'front-core/src/root'
import { setFlags } from 'front-core/src/flags'

/* eslint-disable no-console */
console.log('React version:', React.version)

const exec = (config) => {
  setFlags(config.flags)
  const getApiRequests = require('./api').default
  const apiRequests = getApiRequests(config.hosts)
  const routes = require('./routes')

  root({
    ...routes,
    apiRequests,
    config,
  })
}

fetch('/config.json')
  .then(res => res.json())
  .then((res) => {
    if (document.readyState !== 'loading') {
      exec(res)
    } else {
      document.addEventListener('DOMContentLoaded', () => exec(res))
    }
  })
