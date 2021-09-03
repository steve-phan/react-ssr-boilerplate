import serialize from 'serialize-javascript';

export const getHTML = (html, initialState, css) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style id="ssr-css">${css}</style>
    <title>Document</title>
</head>
<body>
    <div id="root">${html}</div>
    <script>
    window.__PRELOADED_STATE__ = ${serialize(initialState, { isJSON: true })}
    </script>
    <script src="./dist/bundle.js"></script>
</body>
</html>`;
