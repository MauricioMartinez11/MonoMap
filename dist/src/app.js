"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envs_1 = require("./config/envs");
const init_1 = require("./data/init");
const routes_1 = require("./presentation/routes");
// import { EmailJob } from './domain/jobs/email.job';
console.log(envs_1.envs.PORT);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.AppRoutes.routes);
(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield init_1.MongoDBDataBase.connect({
        mongoURL: envs_1.envs.MONGO_URL,
        dbName: envs_1.envs.MONGO_DB
    });
}))();
app.listen(envs_1.envs.PORT, () => {
    console.log('Server running on PORT 3000');
    // EmailJob()
});
