# Настройка Prettier и Eslint для React приложения

---

Для использования **eslint** необходимо установить eslint и в файле **.eslintrc.js** использовать конфигурацию из репозитория

```node
module.exports = {
  extends: ['@alt-code/linters-config/eslint.js'],
};
```

Для конфигурации prettier добавить настройки в package.json

```json
{
  "prettier": "@alt-code/linters-config/prettierrc.js"
}
```
