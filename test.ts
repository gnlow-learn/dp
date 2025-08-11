// @ts-types="https://esm.sh/@stdlib/random@0.3.3/base/normal/docs/types/index.d.ts"
import normal from "https://esm.sh/@stdlib/random@0.3.3/base/normal/lib?standalone"

import { dp } from "./mod.ts"

const seededNormal = normal.factory({ seed: 5 })

console.log(
    dp(5, _ => seededNormal(0, 1), 10, 5)
)
