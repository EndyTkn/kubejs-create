onEvent('item.registry', evt => {
    const createBattery = () => {
        evt.create('battery').texture('kubejs:item/battery').displayName('Battery')
    }
    const createNetherrackDust = () => {
        evt.create('netherrack_sand').texture('kubejs:item/netherrack_sand').displayName('Netherrack Sand')
    }
    createBattery();
    createNetherrackDust()
})

onEvent('block.registry', evt => {
    createMachine(evt, 'tier2_machine', 'kubejs:block/tier1_machine', 'Tier2 Machine')
})