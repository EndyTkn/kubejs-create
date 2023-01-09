onEvent('item.tags', evt => {    
    tagGoldCast(evt, 'kubejs:circuit_inscribe_cast')
    evt.add('tconstruct:casts/multi_use/circuit', 'kubejs:circuit_inscribe_cast')
    evt.add('kubejs:circuit/copper', 'kubejs:copper_circuit')
    evt.add('tconstruct:copper', 'kubejs:copper_circuit')
})

onEvent('recipes', evt => {   
    const millingRainbowCrystal = () => {
        evt.recipes.createCrushing([
            Item.of('tconstruct:earth_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:sky_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:ichor_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:ender_slime_crystal_cluster').withChance(0.5)
        ], 'kubejs:rainbow_crystal')
    
        evt.recipes.createMilling([
            Item.of('tconstruct:earth_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:sky_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:ichor_slime_crystal_cluster').withChance(0.5),
            Item.of('tconstruct:ender_slime_crystal_cluster').withChance(0.5)
        ], 'kubejs:rainbow_crystal')
    }

    const recipeRainbowCrystal = () => {
        evt.smelting('kubejs:rainbow_crystal', 'alexsmobs:rainbow_jelly')
    }

    evt.recipes.tconstruct.casting_table('kubejs:circuit_inscribe_cast', 'tconstruct:molten_gold')
        .cast('kubejs:copper_circuit')
        .consumeCast()
        
    evt.recipes.tconstruct.casting_table('kubejs:copper_circuit', 'tconstruct:molten_copper')
        .cast('kubejs:circuit_inscribe_cast')
        
    millingRainbowCrystal()
    recipeRainbowCrystal()
})

onEvent('entity.spawned', evt => {
    let entity = evt.entity
    let level = evt.level
    let server = evt.server

    const rainbowJellyProduction = () => {
        if (entity.getItem() == null)
            return;
        if (entity.getItem().getId() != 'minecraft:prismarine_crystals') return;

        let entities = server.getEntities(`@e[x=${entity.x}, y=${entity.y}, z=${entity.z}, distance=0..10,type=alexsmobs:comb_jelly]`)
        
        if (!entities)
            return

        let combJelly = entities.find(ent => ent.getType() == 'alexsmobs:comb_jelly')
        if (!combJelly) return;

        server.scheduleInTicks(100, () => {
            let rainbowJelly = level.createEntity("minecraft:item")
            rainbowJelly.item = Item.of('alexsmobs:rainbow_jelly')
            rainbowJelly.item.count = 1
            rainbowJelly.pickupDelay = 0
            rainbowJelly.x = combJelly.x
            rainbowJelly.y = combJelly.y
            rainbowJelly.z = combJelly.z
            rainbowJelly.spawn()
            entity.kill()
        })

    }
    rainbowJellyProduction()
})