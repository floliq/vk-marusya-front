/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"],
  "rules": {
    "at-rule-no-unknown": null, // Отключаем стандартное правило
    "scss/at-rule-no-unknown": true, // Включаем Sass-версию правила
    "selector-class-pattern": null, // Если нужно разрешить любые имена классов
    "custom-property-pattern": null // Если нужно разрешить любые CSS-переменные
  }
}
