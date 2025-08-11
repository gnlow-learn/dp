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

class MF<T> {
    p
    constructor(p = new Map<T, number>) {
        this.p = p
    }
}

class PMF<T> extends MF<T> {
    add(k: T, p: number) {
        this.p.set(k, p)
    }

    toCMF() {
        let sum = 0
        return new CMF(this.p.entries()
            .reduce(
                (m, [k, v]) => m.set(k, sum += v),
                new Map<T, number>,
            )
        )
    }
    sample(seed = Math.random()) {
        return this.toCMF().sample(seed)
    }
}

class CMF<T> extends MF<T> {
    sample(seed = Math.random()) {
        return this.p.entries()
            .find(([_, v]) => seed < v)!
            [0]
    }
}

const dp =
<T>
(a: number, h: (seed: number) => T, sample = 10) => {
    const pmf = new PMF<T>()
    gem(a)
        .take(sample)
        .forEach(b => pmf.add(h(Math.random()), b))
    return pmf
}

// @ts-types="https://esm.sh/@stdlib/random@0.3.3/base/normal/docs/types/index.d.ts"
import normal from "https://esm.sh/@stdlib/random@0.3.3/base/normal/lib?standalone"

console.log(
    dp(5, _ => normal(0, 1), 10)
)
