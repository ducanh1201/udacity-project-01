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
const images_utils_1 = require("../../utils/images-utils");
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename, width, height } = req.query;
    const rootPath = `assets/images/${filename}.jpg`;
    const cachePath = `assets/cache/${filename}-${width}x${height}.jpg`;
    const resizedImage = yield (0, images_utils_1.resizeImage)(rootPath, cachePath, Number(width), Number(height));
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(resizedImage);
}));
exports.default = images;
