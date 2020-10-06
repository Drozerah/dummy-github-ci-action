![CI](https://github.com/Drozerah/dummy-github-ci-action/workflows/CI/badge.svg)
![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)
![nycrc config on GitHub](https://img.shields.io/nycrc/Drozerah/dummy-github-ci-action?config=.nycrc.json&label=coverage)
# Dummy Github Continuous Integration Action

Table of Contents
-----------------

- [Description](#description)
- [Installation and commands](#installation-and-commands)
- [CI](#continuous-integration)
- [List of Packages](#list-of-packages)
- [Author](#author)
- [License](#license)

Description
-----------
> Repository for testing Continuous Integration with Github Action

Installation and commands
-------------------------

````bash
# Get a local version of this repository
$ git clone https://github.com/Drozerah/dummy-github-ci-action.git

# Then
$ cd dummy-github-ci-action

# Install
$ npm install

# JavaScript linter standard config with ESLint
$ npm run eslint

# Unit testing with Mocha
$ npm test

# Code Coverage with nyc
$ npm run coverage
````


Continuous Integration
----------------------

On `push` and `pull request` Github events we:
- run action across different versions of node
- clean and install dependencies 
- build the source code if any
- run eslint
- run tests
- run coverage

List of Packages
----------------

__devDependencies__

| Package                                                                             | Description                                                                    |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [chai](http://chaijs.com)                                                           | BDD/TDD assertion library for node.js and the browser. Test framework agnostic |
| [eslint](https://eslint.org)                                                        | An AST-based pattern checker for JavaScript                                    |
| [eslint-config-standard](https://github.com/standard/eslint-config-standard)        | JavaScript Standard Style - ESLint Shareable Config                            |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)           | Import with sanity                                                             |
| [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node#readme)       | Additional ESLint's rules for Node.js                                          |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#readme)   | Enforce best practices for JavaScript promises                                 |
| [eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter                                          |
| [mocha](https://mochajs.org/)                                                       | Simple, flexible, fun test framework                                           |
| [nyc](https://istanbul.js.org/)                                                     | The Istanbul command line interface                                            |


List of Packages generated by [Dep to Doc CLI 1.0.0](https://github.com/Drozerah/dep-to-doc-cli.git)


Author
------

- Thomas G. aka Drozerah - [GitHub](https://github.com/Drozerah)

License
-------

- [ISC](licence) © Thomas G. aka Drozerah