
onEvent('item.registry', evt => {
    function createAndesiteMix() {
        evt.create('andesite_mix').texture('kubejs:item/andesite_mix').displayName('Andesite Mix')
    }
    function createTierOneMechanism() {
        evt.create('andesite_tool_base').texture('kubejs:item/andesite_tool_base').displayName('Andesite Tool Base')
    }

    createAndesiteMix()
    createTierOneMechanism()
})

onEvent('block.registry', evt => {
    createMachine(evt, 'tier1_machine', 'kubejs:block/tier1_machine', 'Tier1 Andesite Machine')
    createMachine(evt, 'tier1_incompleted_chassi', 'kubejs:block/tier1_incompleted_chassi', 'Tier1 Incompleted Chassi')
    createMachine(evt, 'tier1_completed_chassi', 'kubejs:block/tier1_completed_chassi', 'Tier1 completed Chassi')
    createMachine(evt, 'tier1_5_machine', 'kubejs:block/tier1_completed_chassi', 'Tier1.5 Copper Machine')
})