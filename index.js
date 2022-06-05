#!/usr/bin/env node
'use strict'
const meow = require('meow')
const registryUrl = require('registry-url')

const cli = meow(
  `
  Usage
    $ print-registry <scope>

  Options
    --json Output registry URL as a JSON object with a "url" property
    --help, -h Show this help text

  Examples
    $ print-registry
    https://registry.npmjs.org/

    $ print-registry @myco
    https://npm.myco.com/

    $ print-registry --json
    {"url":"https://registry.npmjs.org/"}
`,
  {
    flags: {
      json: {
        default: false,
        type: 'boolean',
      },
      help: {
        default: false,
        alias: 'h',
        type: 'boolean',
      },
    },
  }
)

if (cli.flags.help) {
  cli.showHelp()
}

const scope = cli.input[0]
const asJson = cli.flags.json
const url = registryUrl(scope)

console.log(asJson ? JSON.stringify({url}) : url)
