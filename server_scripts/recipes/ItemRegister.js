const ItemRegister = () => {
    this.items = {}
    this.addItem = (id, itemName, rightClick, tag) => {
        this.newItem = {
            id,
            itemName,
            tags: [tag],
            onRightClick: [rightClick],
        }
        this.items[id] = newItem
    }

    this.addRightClick = (id, rightClick) => {
        this.items[id].onRightClick(rightClick)
    }

    this.addTag = (id, tag) => {
        this.items[id].tags.push(tag)
    }

    this.getAllItems = () => this.items

    this.registerEventRightclick = (evt) => {
        this.items.forEach(item => {
            evt.rightClick(item.tag, item.id)
        });
    }

    this.registerEventTags = (evt) => {
        this.items.forEach(item => {
            evt.add(item.tag, item.id)
        });
    } 
}
