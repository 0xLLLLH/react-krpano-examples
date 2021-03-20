module.exports =  {
    semi:  true,
    trailingComma:  'all',
    singleQuote:  true,
    printWidth:  120,
    tabWidth:  4,
    // 格式与eslint的overrides一致
    "overrides": [
      {
        "files": "*.json",
        "options": {
            tabWidth:  2
        }
      },
      {
        "files": ["*.html", "legacy/**/*.js"],
        "options": {
            printWidth:  240
        }
      }
    ]
  };
