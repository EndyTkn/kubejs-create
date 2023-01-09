onEvent('item.modification', event => {
    event.modify('create:brass_hand', item => {
        item.displayName = 'Gold Hand'
    })
})