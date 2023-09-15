"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = __importDefault(require("../schemas"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exportResult = {
    async sampleDbQuery(reqBody) {
        const createdSample = new schemas_1.default(reqBody);
        return createdSample.save();
    },
};
exports.default = exportResult;
