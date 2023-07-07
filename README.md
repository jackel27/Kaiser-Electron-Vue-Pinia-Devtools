# Vue 3 + Electron Boilerplate

This project is a boilerplate for creating desktop applications with [Vue 3](https://v3.vuejs.org/) and [Electron](https://www.electronjs.org/). Vue Devtools are also integrated for ease of Vue component inspection and debugging. **This is a work in progress** and the next step is to incorporate Pinia for state management.

## Project setup

You need Node.js installed on your machine before you can use this boilerplate. If it's not installed, you can download it [here](https://nodejs.org/en/download/).

Once Node.js is installed, navigate to the project directory and install the dependencies with:
``` npm install ```
or
``` yarn install ```
if you prefer yarn.

      
### Compiles and hot-reloads for development

To start the development server with hot-reload, run:
``` npm run electron:serve ```
or
``` yarn electron:serve ```
if you prefer yarn.

### Compiles and minifies for production

To build the application for production, run:
``` npm run electron:build ```
or
``` yarn electron:build ```
if you prefer yarn.

### Lints and fixes files

To lint and fix files, run:
``` npm run lint ```
or
``` yarn lint ```
if you prefer yarn.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Structure of the boilerplate

The project structure of the boilerplate is easy to understand:

`src` directory contains your Vue.js application.

`dist_electron` is generated and contains the packed Electron application.

`vue-devtools` is included for Vue component inspection and debugging. Downloaded the most recent plugin from google's chrome web store.

## Upcoming Features

- [ ] Integrate Pinia for state management

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## To Do

- [ ] Add tests
- [ ] Add Pinia for state management

