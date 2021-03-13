# React Native Template Redux TypeScript

<p>
  <a href="https://github.com/rahsheen/react-native-template-redux-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/rahsheen/react-native-template-redux-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/rahsheen/react-native-template-redux-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with Redux and TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Redux Toolkit already configured per [ Redux Toolkit Getting Started ]( https://redux-toolkit.js.org/tutorials/quick-start )
- Minimal additional dependencies

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-redux-typescript
```

### Usage with older versions of React Native

#### e.g. `react-native@0.62.x`

```sh
npx react-native init MyApp --template react-native-template-redux-typescript@6.4.*
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native  	| Template  	|
|---	            |---	        |
| 0.63  	        | 6.5.*       |
| 0.62  	        | 6.4.*       |
| 0.61  	        | 6.3.*       |
| 0.60  	        | 6.2.*       |

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
