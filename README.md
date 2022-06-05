# print-registry

Print the configured npm registry URL for a given scope to terminal.
A thin CLI wrapper around [registry-url](https://github.com/sindresorhus/registry-url/) by Sindre Sorhus.

## Usage

```
$ print-registry --help

  Print the configured npm registry URL for a given scope

  Usage
    $ print-registry <scope>

   Options
     --json     Output registry info as a JSON object
     --help, -h Show this help text

  Examples
    $ print-registry
    https://registry.npmjs.org/

    $ print-registry @myco
    https://npm.myco.com/

    $ print-registry --json
    {"url":"https://registry.npmjs.org/"}

```

```ini
# .npmrc
registry = 'https://custom-registry.com/'
```

```bash
npx print-registry
# output: 'https://custom-registry.com/'
```

It can also retrieve the registry URL associated with an [npm scope](https://docs.npmjs.com/misc/scope).

```ini
# .npmrc
@myco:registry = 'https://custom-registry.com/'
```

```bash
npx print-registry @myco
# output: 'https://custom-registry.com/'
```

If the provided scope is not in the user's `.npmrc` file, then `print-registry` will check for the existence of `registry`, or if that's not set, fallback to the default npm registry.

## License

MIT © [Espen Hovlandsdal](https://espen.codes/)
