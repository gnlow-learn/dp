// @ts-types="https://esm.sh/@stdlib/random@0.3.3/base/beta/docs/types/index.d.ts"
import beta from "https://esm.sh/@stdlib/random@0.3.3/base/beta/lib?standalone"

const gem =
function* (a: number) {
    let b = 1
    while (1) {
        const v = beta(1, a)
        yield v * b
        b *= (1-v)
    }
}

console.log(...gem(5).map(x => x.toFixed(2)).take(10))
