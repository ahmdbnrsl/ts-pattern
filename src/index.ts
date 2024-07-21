import { Pattern } from './pattern/index';

function main() {
    const star = new Pattern.Star<number>(20);

    star.diamond();
    star.triangle();
    star.inverseTriangle();

    const num = new Pattern.Num<number>(8);

    num.coordinate();
}

main();
