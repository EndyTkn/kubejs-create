onEvent('recipes', evt => {
    const recipeAndesitePebble = () => {
        const pebble = 'exnihilosequentia:andesite_pebble'
        evt.recipes.createMilling([Item.of(`3x ${pebble}`)], 'minecraft:andesite')
        evt.recipes.createCrushing([Item.of(`4x ${pebble}`)], 'minecraft:andesite')
    }
    recipeAndesitePebble()
})