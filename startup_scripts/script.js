// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

function createMachine(event, id, model, name) {
	event.create(id)
		.model(model)
		.material('lantern')
		.hardness(3.0)
		.displayName(name)
		.renderType('cutout')
}

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})