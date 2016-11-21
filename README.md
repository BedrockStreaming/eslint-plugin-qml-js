# eslint-plugin-qml-js

Parse JS files with ESLint in a QtQML project.

With this plugin, you can't parse QML files ! It only remove QML specific import statements in JS files to avoid parse error.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-qml-js`:

```
$ npm install eslint-plugin-qml-js --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-qml-js` globally.

## Usage

Add `qml-js` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "qml-js"
    ]
}
```
