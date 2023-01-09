onEvent('recipes', evt => {
    const testeTrade = () => {
        evt.recipes.custommachinery.custom_machine('custommachinery:trading_post', 100)
            .requireEnergyPerTick(20)
            .requireItem('kubejs:profession_card_miner', 'cardInput')
            .requireItem('minecraft:dirt', 'coinInput')
            .produceItem(Item.of('minecraft:stone', 2))
    }

    testeTrade()
})

onEvent('item.tags', evt => {    
    const professions = [
        { name: 'miner', color: '0xFFCC29' },
        { name: 'farmer', color: '0x88FFF7' },
        { name: 'fisherman', color: '0xFF7A00' },
    ]

/*     professions.forEach(profession => {
        //evt.add('kubejs:card' + profession.name, 'kubejs:profession_card_' + profession.name)
    }) */
})