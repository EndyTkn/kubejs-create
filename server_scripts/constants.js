let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

const createItemApplication = (evt, ingredients, result) => {
    evt.custom({
        type: 'create:item_application',
        ingredients: ingredients,
        
        results: [result]
    })
}

const recipeTableCast = (event, castTag, consumedBool, fluidTag, amountInt, resultName, coolingTicks) => {
    event.custom(
        {
            "type": 'tconstruct:casting_table',
            "cast":
            {
                "tag": castTagç
            },
            "cast_consumed": consumedBool,
            "fluid":
            {
                "tag": fluidTag,
                "amount": amountInt
            },

            "result": resultName,
            "cooling_time": coolingTicks
        })
}

const tagGoldCast = (evt, itemId) => {
    evt.add('tconstruct:casts', itemId)
    evt.add('tconstruct:casts/gold', itemId)
    evt.add('tconstruct:casts/multi_use', itemId)
    evt.add('tconstruct:patterns', itemId)
    evt.add('tconstruct:patterns/reusable', itemId)
}