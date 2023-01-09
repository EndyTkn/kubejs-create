onEvent('recipes', evt => {
    let recipeNetherrackSand = () => {
        evt.recipes.createCrushing([
            '6x kubejs:netherrack_sand',
            Item.of('kubejs:netherrack_sand').withChance(0.5),
            Item.of('kubejs:netherrack_sand').withChance(0.5)
        ], 'minecraft:netherrack')

        evt.recipes.createMilling([
            '5x kubejs:netherrack_sand',
            Item.of('kubejs:netherrack_sand').withChance(0.5)
        ], 'minecraft:netherrack')

        evt.recipes.createCompacting([
            '4x kubejs:netherrack_sand',
        ], 'minecraft:netherrack')

        evt.recipes.createCompacting([
            '4x kubejs:netherrack_sand',
        ], 'minecraft:netherrack')

        evt.smelting('minecraft:redstone', 'kubejs:netherrack_sand')
    }

    let recipeBattery = () => {
        let incompBattery = 'quark:iron_button';
        evt.recipes.createSequencedAssembly([
            'kubejs:battery',
        ], incompBattery, [
            evt.recipes.createDeploying(incompBattery, [incompBattery, 'minecraft:redstone']),
            evt.recipes.createDeploying(incompBattery, [incompBattery, '#forge:plates/zinc']),
            evt.recipes.createDeploying(incompBattery, [incompBattery, '#forge:plates/copper'])
        ]).transitionalItem(incompBattery)
            .loops(1)
    }

    recipeBattery()
    recipeNetherrackSand()
})