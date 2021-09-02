import path from 'path';
import express from 'express';
import { hello } from 'src/hello';
import { handleRender } from 'src/middlewares';

hello();

const PORT = 3000;
const app = express();
/*
 * MiddleWares
 */
app.use('/static', express.static('./src/assets'));

app.get('/', handleRender);

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
