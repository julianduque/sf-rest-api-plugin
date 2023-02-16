# @julianduque/rest-api-plugin

[![NPM](https://img.shields.io/npm/v/rest-api.svg?label=rest-api)](https://www.npmjs.com/package/@julianduque/rest-api-plugin) [![Downloads/week](https://img.shields.io/npm/dw/rest-api.svg)](https://npmjs.org/package/@julianduque/rest-api-plugin) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/julianduque/sf-rest-api-plugin/main/LICENSE.txt)

## Install

```bash
sf plugins install @julianduque/rest-api-plugin@x.y.z
```

## Contributing

1. Please read our [Code of Conduct](CODE_OF_CONDUCT.md)
2. Create a new issue before starting your project so that we can keep track of
   what you are trying to add/fix. That way, we can also offer suggestions or
   let you know if there is already an effort in progress.
3. Fork this repository.
4. [Build the plugin locally](#build)
5. Create a _topic_ branch in your fork. Note, this step is recommended but technically not required if contributing using a fork.
6. Edit the code in your fork.
7. Write appropriate tests for your changes. Try to achieve at least 95% code coverage on any new code. No pull request will be accepted without unit tests.
8. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:julianduque/sf-rest-api-plugin

# Install the dependencies and compile
yarn && yarn build
```

To use your plugin, run using the local `./bin/dev` or `./bin/dev.cmd` file.

```bash
# Run using local run file.
./bin/dev hello world
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sf cli
sf plugins link .
# To verify
sf plugins
```

## Commands

<!-- commands -->

- [`sf rest PATH`](#sf-rest-path)

## `sf rest PATH`

A Salesforce REST API plugin

```
USAGE
  $ sf rest [PATH] [--json] [-o <value>] [-m GET|POST|PATCH|PUT|DELETE] [-t
    application/json|application/xml] [-p <value>] [--api-version <value>]

ARGUMENTS
  PATH  [default: /] REST API path.

FLAGS
  -m, --method=<option>        [default: GET] HTTP method.
                               <options: GET|POST|PATCH|PUT|DELETE>
  -o, --target-org=<value>     Login username or alias for the target org.
  -p, --payload=<value>        HTTP payload.
  -t, --content-type=<option>  [default: application/json] HTTP content-type header.
                               <options: application/json|application/xml>
  --api-version=<value>        Override the api version

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  A Salesforce REST API plugin

  Make authenticated Salesforce REST API requests to your org.

EXAMPLES
  $ sf rest /limits --target-org myorg

  $ sf rest /sobject/Account -o myorg -m POST -p '{"Name":"Acme Inc."}'

  $ sf rest /sobject/Account -o myorg -m POST -p '<Account><Name>Acme Inc.</Name></Account>' -t application/xml

FLAG DESCRIPTIONS
  --api-version=<value>  Override the api version

    Override the api version used for api requests made by this command
```

<!-- commandsstop -->
