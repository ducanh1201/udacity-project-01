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
const supertest_1 = __importDefault(require("supertest"));
const images_utils_1 = require("../utils/images-utils");
const index_1 = __importDefault(require("../index"));
describe('resizeImage', () => {
    it('should resize the image', () => __awaiter(void 0, void 0, void 0, function* () {
        const rootPath = 'assets/images/fjord.jpg';
        const cachePath = 'assets/cache/encenadaport-400x200.jpg';
        const width = 200;
        const height = 200;
        const resizedImage = yield (0, images_utils_1.resizeImage)(rootPath, cachePath, width, height);
        expect(resizedImage).toBeDefined();
    }));
});
const request = (0, supertest_1.default)(index_1.default);
describe('GET /api/images', () => {
    it('responds with an image', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=encenadaport&width=200&height=200');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('image/jpeg');
        expect(response.body).toBeDefined();
    }));
});
