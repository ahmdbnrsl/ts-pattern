export namespace Pattern {
    export class Star<S extends number> {
        constructor(private count: S) {}

        diamond(): void {
            for (let i = 0; i < this.count * 2 - 1; i++) {
                if (i == this.count - 1) {
                    console.log('', '* '.repeat(this.count));
                } else if (i < this.count - 1) {
                    console.log(
                        ' '.repeat(this.count - (i + 1)),
                        '* '.repeat(i + 1)
                    );
                } else {
                    console.log(
                        ' '.repeat(i + 1 - this.count),
                        '* '.repeat(i - ((i - this.count) * 2 + 1))
                    );
                }
            }
        }

        triangle(): void {
            for (let i = 0; i < this.count; i++) {
                if (i == this.count - 1) {
                    console.log('', '* '.repeat(this.count));
                } else if (i < this.count - 1) {
                    console.log(
                        ' '.repeat(this.count - (i + 1)),
                        '* '.repeat(i + 1)
                    );
                }
            }
        }

        inverseTriangle(): void {
            for (let i = 0; i < this.count * 2 - 1; i++) {
                if (i == 0 || i == this.count * 2 - 2) {
                    console.log('', '* '.repeat(this.count));
                } else if (i < this.count) {
                    console.log(' '.repeat(i), '* '.repeat(this.count - i));
                } else {
                    console.log(
                        ' '.repeat(i - ((i - this.count) * 2 + 2)),
                        '* '.repeat(i + 2 - this.count)
                    );
                }
            }
        }
    }

    export class Num<N extends number> {
        constructor(private count: N) {}

        coordinate(): void {
            for (let i = 0; i < this.count * 2 + 1; i++) {
                if (i == this.count) {
                    let a: Array<number> = Array(0);
                    for (let j = 0; j < this.count * 2; j++) {
                        a.push(j - this.count);
                        if (j == this.count * 2 - 1) a.push(this.count);
                    }
                    console.log(...a);
                } else {
                    console.log(
                        ' '.repeat(
                            i <= this.count
                                ? this.count * 3 - 1
                                : this.count * 3 - 2
                        ),
                        this.count - i
                    );
                }
            }
        }
    }
}
