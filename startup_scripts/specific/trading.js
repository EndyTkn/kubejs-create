
onEvent('item.registry', evt => {
    const professions = [
        { name: 'miner', color: '0xFFCC29' },
        { name: 'farmer', color: '0x88FFF7' },
        { name: 'fisherman', color: '0xFF7A00' },
    ]

    let createProfessionCard = (name, color) => {
		evt.create(`profession_card_${name}`)
			.color(1, color)
            .color(2, color)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/profession_card_0")
			.displayName(`Profession: ${name}`)
			.unstackable()
	}

    professions.forEach(profession => createProfessionCard(profession.name, profession.card))
})