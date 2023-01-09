onEvent('recipes', evt => {
    function recipeAndesiteAlloy() {
        evt.shaped('kubejs:andesite_mix', [
                'PI',
            'IP',
        ], {
            "P": 'exnihilosequentia:andesite_pebble',
            "I": '#forge:nuggets/iron'
        })

        evt.recipes.createMixing('2x kubejs:andesite_mix', [
                '2x exnihilosequentia:andesite_pebble',
            '2x #forge:nuggets/iron',
        ])

        evt.smelting('create:andesite_alloy', 'kubejs:andesite_mix')
    }

    function recipeAndesiteBase() {
        evt.shaped('kubejs:andesite_tool_base', [
            'A',
            'B',
            'W'
        ], {
            "A": 'create:andesite_alloy',
            "B": 'create:belt_connector',
            "W": '#minecraft:wooden_slabs'
        });

        evt.recipes.createCompacting('kubejs:andesite_tool_base', [
            'create:andesite_alloy',
            'create:belt_connector',
            '#minecraft:wooden_slabs'
        ])
    }

    function recipeTierOneChassi() {
        const incompChassi = 'kubejs:tier1_incompleted_chassi';
        evt.recipes.createCompacting(incompChassi, '4x create:andesite_alloy')

        evt.recipes.createSequencedAssembly([
            'kubejs:tier1_completed_chassi',
        ], incompChassi, [
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'create:shaft']),
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'create:shaft']),
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'create:shaft'])
        ]).transitionalItem(incompChassi)
            .loops(1)
            .id('kubejs:tier1_completed_chassi')
    }

    function recipeTierOneMachine() {
        const stoneCuttingItems = [
            {name: 'andesite_funnel', count: 4},
            {name: 'depot', count: 4},
            {name: 'chute', count: 4},
            {name: 'andesite_tunnel', count: 4},
            {name: 'deployer', count: 2},
            {name: 'filter', count: 1},
        ]

        const incompChassi = 'kubejs:tier1_completed_chassi';
        evt.recipes.createSequencedAssembly([
            'kubejs:tier1_machine',
        ], incompChassi, [
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'create:cogwheel']),
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'create:gearbox']),
            evt.recipes.createDeploying(incompChassi, [incompChassi, 'kubejs:andesite_tool_base'])
        ]).transitionalItem(incompChassi)
            .loops(1)
            .id('kubejs:tier1_machine')
        createItemApplication(evt, [Item.of('kubejs:tier1_incompleted_chassi'), Item.of('create:metal_bracket')], Item.of('kubejs:tier1_completed_chassi'))
        createItemApplication(evt, [Item.of('kubejs:tier1_completed_chassi'), Item.of('kubejs:andesite_tool_base')], Item.of('kubejs:tier1_machine'))

        stoneCuttingItems.forEach(item => evt.stonecutting(`${item.count}x create:${item.name}`, 'kubejs:tier1_machine'))
    }
    
    recipeAndesiteAlloy()
    recipeAndesiteBase()
    recipeTierOneChassi()
    recipeTierOneMachine()
})