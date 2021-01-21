const plantsInField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj))
    plantsInField.push(seedObj)
}

export const usePlants = () => {
    return plantsInField.slice()
}