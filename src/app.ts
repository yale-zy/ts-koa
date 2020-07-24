import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import {AppRoutes} from "./routes";
import * as mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/koats").then(async connection => {
    const app = new Koa();
    const router = new Router();
    AppRoutes.forEach(route => {
        router[route.method](route.path,route.action);
    });
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3001);

    console.log("Application start up!!!");
}).catch(err => {console.error(err.message);});