
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/hikarupurba/Code/KareerKanban_Amplify/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/hikarupurba/Code/KareerKanban_Amplify/src/pages/404.js")),
  "component---src-pages-app-js": preferDefault(require("/Users/hikarupurba/Code/KareerKanban_Amplify/src/pages/app.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/hikarupurba/Code/KareerKanban_Amplify/src/pages/index.js"))
}

