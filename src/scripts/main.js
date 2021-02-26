import { createPlan } from './plan.js'

const yearlyPlan = createPlan()
console.log("Welcome to the main module")

for (const randomCrop of yearlyPlan) {
    console.log(randomCrop)
}