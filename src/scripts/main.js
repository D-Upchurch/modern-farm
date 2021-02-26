import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

const yearlyPlan = createPlan()
console.log("Welcome to the main module")

// The following code will log the result of the createPlan() function which was imported and assigned to the variable yearlyPlan to the console. This shows that your function from plan.js works as intended.

for (const randomCrop of yearlyPlan) {
    console.log(randomCrop)
}

//The following code should display an object(in the first case an array of two objects) with three properties in the dev console.
const cornSeed = createCorn()
console.log(cornSeed)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)