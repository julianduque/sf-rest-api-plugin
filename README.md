# rest-api

[![NPM](https://img.shields.io/npm/v/rest-api.svg?label=rest-api)](https://www.npmjs.com/package/rest-api) [![Downloads/week](https://img.shields.io/npm/dw/rest-api.svg)](https://npmjs.org/package/rest-api) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/rest-api/main/LICENSE.txt)

## Using the template

This repository provides a template for creating a plugin for the Salesforce CLI. To convert this template to a working plugin:

1. Please get in touch with the Platform CLI team. We want to help you develop your plugin.
2. Generate your plugin:

   ```
   sf plugins install dev
   sf dev generate plugin

   git init -b main
   git add . && git commit -m "chore: initial commit"
   ```

3. Create your plugin's repo in the salesforcecli github org
4. When you're ready, replace the contents of this README with the information you want.

## Learn about `sf` plugins

Salesforce CLI plugins are based on the [oclif plugin framework](<(https://oclif.io/docs/introduction.html)>). Read the [plugin developer guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins_architecture_sf_cli.htm) to learn about Salesforce CLI plugin development.

This repository contains a lot of additional scripts and tools to help with general Salesforce node development and enforce coding standards. You should familiarize yourself with some of the [node developer packages](#tooling) used by Salesforce.

Additionally, there are some additional tests that the Salesforce CLI will enforce if this plugin is ever bundled with the CLI. These test are included by default under the `posttest` script and it is required to keep these tests active in your plugin if you plan to have it bundled.

### Tooling

- [@salesforce/core](https://github.com/forcedotcom/sfdx-core)
- [@salesforce/kit](https://github.com/forcedotcom/kit)
- [@salesforce/sf-plugins-core](https://github.com/salesforcecli/sf-plugins-core)
- [@salesforce/ts-types](https://github.com/forcedotcom/ts-types)
- [@salesforce/ts-sinon](https://github.com/forcedotcom/ts-sinon)
- [@salesforce/dev-config](https://github.com/forcedotcom/dev-config)
- [@salesforce/dev-scripts](https://github.com/forcedotcom/dev-scripts)

### Hooks

For cross clouds commands, e.g. `sf env list`, we utilize [oclif hooks](https://oclif.io/docs/hooks) to get the relevant information from installed plugins.

This plugin includes sample hooks in the [src/hooks directory](src/hooks). You'll just need to add the appropriate logic. You can also delete any of the hooks if they aren't required for your plugin.

# Everything past here is only a suggestion as to what should be in your specific plugin's description

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sf plugins install rest-api@x.y.z
```

## Issues

Please report any issues at https://github.com/forcedotcom/cli/issues

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
8. Sign CLA (see [CLA](#cla) below).
9. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### CLA

External contributors will be required to sign a Contributor's License
Agreement. You can do so by going to https://cla.salesforce.com/sign-cla.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/rest-api

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
  -o, --target-org=<value>     [default: jduque@winter23.test] Login username or alias for the target org.
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
