# Настройка Prettier и Eslint для React приложения

---

Для использования **eslint** достаточно в файле **.eslintrc.js** использовать конфигурацию из репозитория

```json
{
  "extends": "@alt-code/linters-config/eslint.js"
}
```

Для конфигурации prettier добавить настройки в package.json

```json
{
  "prettier": "@alt-code/linters-config/prettierrc.js"
}
```
