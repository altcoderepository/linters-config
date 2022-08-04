
module.exports = {
  env: {
  browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(process.cwd(), "./tsconfig.json")
  },
  plugins: [
    "react",
    "react-hooks",
    "promise",
    "optimize-regex",
    "sonarjs",
    "@typescript-eslint",
    "prettier",
    "import",
    "typescript-sort-keys"
  ],
  rules: {
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal"
      ],
      pathGroupsExcludedImportTypes: [
        "internal"
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc"
      },
      pathGroups: [
        {
          pattern: "@**/**",
          group: "internal",
          position: "before"
        }
      ]
    }
  ],
  "prettier/prettier": [
    "warn"
  ],
  "no-shadow": "off",
  "no-duplicate-imports": [
    "error",
    {
      "includeExports": true
    }
  ],
  "no-template-curly-in-string": "error",
  "block-scoped-var": "error",
  "sonarjs/cognitive-complexity": "warn",
  "curly": [
    "error",
    "all"
  ],
  "eqeqeq": "error",
  "max-classes-per-file": [
    "error",
    1
  ],
  "no-alert": "warn",
  "no-console": "warn",
  "no-else-return": [
    "error",
    {
      "allowElseIf": false
    }
  ],
  "no-implicit-coercion": "off",
  "no-extra-boolean-cast": "off",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-multi-spaces": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-return-await": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unused-expressions": "off",
  "no-useless-call": "error",
  "no-useless-concat": "error",
  "no-useless-return": "error",
  "prefer-promise-reject-errors": "error",
  "radix": "error",
  "no-undefined": "off",
  "array-bracket-newline": [
    "error",
    {
      "multiline": true
    }
  ],
  "comma-dangle": [
    "error",
    "only-multiline"
  ],
  "comma-style": "error",
  "eol-last": "error",
  "key-spacing": "error",
  "keyword-spacing": "error",
  "new-parens": "error",
  "no-bitwise": "warn",
  "no-lonely-if": "warn",
  "no-multiple-empty-lines": "error",
  "no-nested-ternary": "error",
  "no-new-object": "error",
  "no-tabs": [
    "error",
    {
      "allowIndentationTabs": true
    }
  ],
  "no-trailing-spaces": "error",
  "no-unneeded-ternary": "error",
  "no-whitespace-before-property": "error",
  "object-curly-newline": "error",
  "object-curly-spacing": [
    "error",
    "always"
  ],
  "semi-spacing": "error",
  "space-before-blocks": "error",
  "space-before-function-paren": [
    "error",
    {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }
  ],
  "space-in-parens": "error",
  "space-infix-ops": "error",
  "space-unary-ops": "error",
  "spaced-comment": [
    "error",
    "always"
  ],
  "switch-colon-spacing": "error",
  "arrow-body-style": [
    "error",
    "as-needed"
  ],
  "arrow-parens": "off",
  "arrow-spacing": "error",
  "generator-star-spacing": [
    "error",
    "after"
  ],
  "no-confusing-arrow": "off",
  "no-useless-computed-key": "error",
  "no-useless-rename": "error",
  "object-shorthand": [
    "error",
    "always"
  ],
  "prefer-arrow-callback": "warn",
  "prefer-destructuring": "error",
  "rest-spread-spacing": [
    "error",
    "never"
  ],
  "sort-imports": [
    "error",
    {
      "ignoreDeclarationSort": true,
      "memberSyntaxSortOrder": [
        "single",
        "multiple",
        "all",
        "none"
      ]
    }
  ],
  "template-curly-spacing": "error",
  "promise/prefer-await-to-then": "error",
  "optimize-regex/optimize-regex": "warn",
  "@typescript-eslint/restrict-template-expressions": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/ban-ts-comment": "warn",
  "@typescript-eslint/member-ordering": "warn",
  "@typescript-eslint/brace-style": [
    "error",
    "1tbs"
  ],
  "@typescript-eslint/quotes": [
    "error",
    "single",
    {
      "avoidEscape": true
    }
  ],
  "@typescript-eslint/func-call-spacing": [
    "error",
    "never"
  ],
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/no-parameter-properties": "error",
  "@typescript-eslint/no-magic-numbers": [
    "warn",
    {
      "ignoreNumericLiteralTypes": true,
      "ignoreEnums": true,
      "enforceConst": true,
      "ignoreReadonlyClassProperties": true,
      "ignore": [
        0,
        1,
        2,
        24,
        60,
        1000
      ]
    }
  ],
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",
  "@typescript-eslint/prefer-function-type": "warn",
  "@typescript-eslint/prefer-readonly": "warn",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      "allowExpressions": true
    }
  ],
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_$"
    }
  ],
  "@typescript-eslint/no-unsafe-call": "off",
  "typescript-sort-keys/interface": [
    "error",
    "asc",
    {
      "caseSensitive": false,
      "natural": true,
      "requiredFirst": true
    }
  ],
  "@typescript-eslint/sort-type-union-intersection-members": "error",
  "@typescript-eslint/no-floating-promises": "off",
  "react/no-access-state-in-setstate": "error",
  "react/no-danger": "error",
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off",
  "react/no-multi-comp": "error",
  "react/no-this-in-sfc": "error",
  "react/prefer-stateless-function": "error",
  "react/jsx-filename-extension": [
    "error",
    {
      "extensions": [
        ".tsx"
      ]
    }
  ],
  "react/jsx-no-bind": "off",
  "react/jsx-no-literals": "off",
  "react/jsx-no-useless-fragment": "error",
  "react/jsx-pascal-case": "error",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "sonarjs/no-identical-functions": "off"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
       ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}
