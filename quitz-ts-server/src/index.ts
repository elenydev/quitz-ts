import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import path from 'path';
import dotenv from 'dotenv';
import { mongoURI } from './constants/constants';

// Routes

import questionsRoutes from './routes/questionsRoutes';

dotenv.config();

const router = express.Router();
const app = express();

app.use(cors());
app.use(methodOverride(`_method`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader(`Access-Control-Allow-Origin`, `*`);
  res.setHeader(
    `Access-Control-Allow-Methods`,
    `OPTIONS, GET, POST, PUT, PATCH, DELETE`,
  );
  res.setHeader(`Access-Control-Allow-Headers`, `Content-Type, Authorization`);
  if (req.method === `OPTIONS`) {
    return res.sendStatus(200);
  }
  next();
});

router.get(`/`, (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.use(`/`, router);
app.use(`/questions`, questionsRoutes);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080);
  })
  .catch((err) => {
    console.log(err);
  });
