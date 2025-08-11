// @ts-types="https://esm.sh/@stdlib/random@0.3.3/base/beta/docs/types/index.d.ts"
import beta from "https://esm.sh/@stdlib/random@0.3.3/base/beta/lib?standalone"

import { PMF } from "./src/util.ts"

export const gem =
function* (a: number) {
    let b = 1
    while (1) {
        const v = beta(1, a)
        yield v * b
        b *= (1-v)
    }
}

export const dp =
<T>
(a: number, h: (seed: number) => T, sample = 10) => {
    const pmf = new PMF<T>()
    gem(a)
        .take(sample)
        .forEach(b => pmf.add(h(Math.random()), b))
    return pmf
}
