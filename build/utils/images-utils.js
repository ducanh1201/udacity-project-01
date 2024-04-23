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
exports.createCache = exports.resizeImage = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
function resizeImage(rootPath, cachePath, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((0, fs_1.existsSync)(cachePath)) {
            const resizedImage = yield fs_1.promises.readFile(cachePath);
            return resizedImage;
        }
        const resizedImage = yield (0, sharp_1.default)(rootPath)
            .resize(Number(width), Number(height))
            .toBuffer();
        yield createCache(cachePath, resizedImage);
        return resizedImage;
    });
}
exports.resizeImage = resizeImage;
function createCache(cachePath, resizedImage) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs_1.promises.writeFile(cachePath, resizedImage);
    });
}
exports.createCache = createCache;
