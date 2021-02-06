eri
===

cli for express-boilerplate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/eri.svg)](https://npmjs.org/package/eri)
[![License](https://img.shields.io/npm/l/eri.svg)](https://github.com/W2AlharbiMe/eri/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g eri
$ eri COMMAND
running command...
$ eri (-v|--version|version)
eri/1.0.0 win32-x64 node-v14.15.4
$ eri --help [COMMAND]
USAGE
  $ eri COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`eri hello [FILE]`](#eri-hello-file)
* [`eri help [COMMAND]`](#eri-help-command)
* [`eri make`](#eri-make)
* [`eri make:controller NAME`](#eri-makecontroller-name)

## `eri hello [FILE]`

describe the command here

```
USAGE
  $ eri hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ eri hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/W2AlharbiMe/eri/blob/v1.0.0/src/commands/hello.ts)_

## `eri help [COMMAND]`

display help for eri

```
USAGE
  $ eri help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `eri make`

generate anything

```
USAGE
  $ eri make

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ eri make:<topic>

COMMANDS
  make:controller  generate controller
```

_See code: [src/commands/make/index.ts](https://github.com/W2AlharbiMe/eri/blob/v1.0.0/src/commands/make/index.ts)_

## `eri make:controller NAME`

generate controller

```
USAGE
  $ eri make:controller NAME

ARGUMENTS
  NAME  controller name

OPTIONS
  -h, --help         show CLI help
  -p, --path=path    change generate path
  -r, --resourceful  create resourceful controller

EXAMPLE
  $ eri controller mycontroller
```

_See code: [src/commands/make/controller.ts](https://github.com/W2AlharbiMe/eri/blob/v1.0.0/src/commands/make/controller.ts)_
<!-- commandsstop -->
