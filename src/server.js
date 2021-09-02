import express from 'express';
import { hello } from 'src/hello';

hello();

const PORT = 3000;
const app = express();

app.get('/', (req, res, next) => {
  console.log('COnnected');
  res.send('Hello World');
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
