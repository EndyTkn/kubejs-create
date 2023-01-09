

onEvent('recipes', evt => {
    
    const recipesCreateItemApplication = [
        {ingredient: "minecraft:lever", result: "clutch"},
        {ingredient: "minecraft:redstone_torch", result: "gearshift"},
        {ingredient: "minecraft:chain", result: "encased_chain_drive"},
        {ingredient: "kubejs:battery", result: "adjustable_chain_gearshift"},
        {ingredient: "create:large_cogwheel", result: "water_wheel"},
        {ingredient: "create:propeller", result: "encased_fan"},
        {ingredient: "create:encased_fan", result: "nozzle"},
        {ingredient: "create:cogwheel", result: "millstone"},
        {ingredient: "minecraft:iron_block", result: "mechanical_press"},
        {ingredient: "create:whisk", result: "mechanical_mixer"},
        {ingredient: "minecraft:clock", result: "stressometer"},
        {ingredient: "minecraft:compass", result: "speedometer"},
        {ingredient: "farmersdelight:rope", result: "rope_pulley"},
        {ingredient: "create:gantry_shaft", result: "gantry_carriage"},
        {ingredient: "minecraft:piston", result: "mechanical_piston"},
        {ingredient: "create:white_sail", result: "windmill_bearing"},
        {ingredient: "create:shaft", result: "mechanical_bearing"},
        {ingredient: "minecraft:minecart", result: "cart_assembler"},
        {ingredient: "minecraft:slime_block", result: "sticker"},
        {ingredient: "minecraft:redstone", result: "redstone_contact"},
    ]



    const recipeSeats = () => {
        colors.forEach(color => {
            evt.stonecutting(`create:${color}_seat`, `#create:seats`)
        })
    }

    const recipeToolbox = () => {
        colors.forEach(color => {
            evt.stonecutting(`create:${color}_toolbox`, `#create:toolboxes`)
        })
    }

    const recipeGoldhand = () => {
        evt.replaceInput({ output: "create:brass_hand" }, "create:brass_sheet", "create:golden_sheet")
    }

    const recipeValve = () => {
        colors.forEach(color => {
            evt.stonecutting(`create:${color}_valve_handle`, `#create:valve_handles`)
        })
    }
    
    const recipeCreateBaseItems = () => {
        const baseItems = [
            {name: 'shaft', count: '8'},
            {name: 'cogwheel', count: '5'},
            {name: 'large_cogwheel', count: '3'},
            {name: 'gearbox', count: '2'},
            {name: 'vertical_gearbox', count: '2'},
            {name: 'andesite_casing', count: '3'},
        ]

        baseItems.forEach(item => evt.stonecutting(`${item.count}x create:${item.name}`, 'kubejs:andesite_tool_base'))
    }

    
    recipeToolbox()
    recipeSeats()
    recipeGoldhand()
    recipeValve()
    recipeCreateBaseItems()

    recipesCreateItemApplication.forEach(recipe => {
        createItemApplication(evt, [Item.of('kubejs:tier1_machine'), Item.of(recipe.ingredient)], Item.of('create:' + recipe.result))
    })
})