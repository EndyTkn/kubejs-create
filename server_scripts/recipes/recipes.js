onEvent('recipes', evt => {
    const recipeNuggets = () => {
        const NuggetsGen = [
            { nugget: "create:copper_nugget", ingredient: "minecraft:diorite", count: "1" },
            { nugget: "create:zinc_nugget", ingredient: "create:asurine", count: "1" },
            { nugget: "mekanism:nugget_tin", ingredient: "minecraft:granite", count: "1" },
            { nugget: "mekanism:nugget_lead", ingredient: "minecraft:cobbled_deepslate", count: "1" },
            { nugget: "mekanism:nugget_osmium", ingredient: "minecraft:calcite", count: "1" },
            { nugget: "mekanism:nugget_uranium", ingredient: "minecraft:basalt", count: "1" },
        ]

        function washNugget(nugget, ingredient, count) {
            evt.recipes.createSplashing([Item.of(`${count}x ${nugget}`).withChance(0.125)], ingredient)
        }

        NuggetsGen.forEach(item => washNugget(item.nugget, item.ingredient, item.count))
    }

    const recipeLogs = () => {
        const createSCuttingLog = (modname, id) => evt.stonecutting(`${modname}:${id}_log`, `#minecraft:logs`)
        const createSCuttingWood = (modname, id) => evt.stonecutting(`${modname}:${id}_wood`, `#minecraft:logs`)

        const modLogs = [
            { mod: 'minecraft', logs: ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'] },
            { mod: 'biomesoplenty', logs: ['fir', 'redwood', 'cherry', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead'] }
        ]

        modLogs.forEach(modLog => {
            modLog.logs.forEach(log => {
                createSCuttingLog(modLog.mod, log)
                createSCuttingWood(modLog.mod, log)
            })
        })
    }

    const tradeTest = () => {
        evt.smithing('minecraft:golden_apple', 'minecraft:apple', Item.of('minecraft:name_tag', "{RepairCost:0,display:{Name:'{\"text\":\"Trade: Test\"}'}}"))
        evt.smithing('minecraft:golden_apple', 'minecraft:apple', Item.of('minecraft:name_tag', "{RepairCost:0,display:{Name:'{\"text\":\"Trade: Test\"}'}}"))
    }

    recipeNuggets()
    recipeLogs()
    tradeTest()
})