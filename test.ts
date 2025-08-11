// @ts-types="https://esm.sh/@stdlib/random@0.3.3/base/normal/docs/types/index.d.ts"
import normal from "https://esm.sh/@stdlib/random@0.3.3/base/normal/lib?standalone"

import { dp } from "./mod.ts"

console.log(
    dp(5, _ => normal(0, 1), 10)
)
