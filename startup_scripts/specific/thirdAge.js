
onEvent('item.registry', evt => {
    const createAndesiteMix = () => {
        evt.create('rainbow_crystal').texture('kubejs:item/rainbow_crystal').displayName('Rainbow Crystal')
    }
    const createTierOneMechanism = () => {
        evt.create('circuit_inscribe_cast').texture('kubejs:item/circuit_inscribe_cast').displayName('Circuit Inscribe Cast')
    }
    const createMicroshipCase = () => {
        evt.create('microship_case').texture('kubejs:item/microship_case').displayName('Microship Case')
    }
    const createCircuitInscribeCast = () => {
        evt.create('circuit_inscribe_cast').texture('kubejs:item/circuit_inscribe_cast').displayName('Copper Circuit Cast')
    }
    const createCopperCircuit = () => {
        evt.create('copper_circuit').texture('kubejs:item/copper_circuit').displayName('Copper Circuit')
    }
    const createMicroship = () => {
        evt.create('microship').texture('kubejs:item/microship').displayName('Microship')
    }

    createAndesiteMix()
    createTierOneMechanism()
    createMicroshipCase()
    createMicroship()
    createCopperCircuit()
    createCircuitInscribeCast()
})

onEvent('block.registry', evt => {
    createMachine(evt, 'tier3_machine', 'kubejs:block/tier1_machine', 'Tier3 Machine')
})