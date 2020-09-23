{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/destructuring-assignment": "off",
    "react/no-did-update-set-state": "off",
    "react/jsx-props-no-spreading": "off",
    "quotes": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "max-len": [2, { "code": 120, "ignoreUrls": true }],
    "import/no-cycle": "off"
  }
}
