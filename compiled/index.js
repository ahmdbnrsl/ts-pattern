"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./pattern/index");
function main() {
    const star = new index_1.Pattern.Star(20);
    star.diamond();
    star.triangle();
    star.inverseTriangle();
    const num = new index_1.Pattern.Num(8);
    num.coordinate();
}
main();
