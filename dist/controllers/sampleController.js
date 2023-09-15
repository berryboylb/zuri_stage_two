"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sampleService_1 = __importDefault(require("../services/sampleService"));
const error_1 = __importDefault(require("../utils/error"));
const exportResult = {
    async sampleRequest(req, res, next) {
        try {
            const sample = await sampleService_1.default.sampleDbQuery(req.body);
            if (sample.err)
                throw new error_1.default(400, "some error occured");
            return res.status(201).json({
                status: "Success",
                message: "Successfully sampled something",
                data: {
                    sample,
                },
            });
        }
        catch (error) {
            console.log("Error creating admin user " + error);
        }
    },
};
exports.default = exportResult;
