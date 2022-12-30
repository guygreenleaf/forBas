"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
async function fetchData() {
    const res = await axios_1.default.get("https://api.thecatapi.com/v1/images/search?limit=1");
    return res.data;
}
(async () => {
    console.log(await fetchData());
})();
