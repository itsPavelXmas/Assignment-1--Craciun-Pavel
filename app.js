const removeOrderItem = (orderInfo, position) => {
    const { total, items } = orderInfo
    if (!Array.isArray(items)) throw 'Items should be an array'
    const allowedKeys = JSON.stringify(['price', 'quantity'])
    items.forEach((item) => {
      if (JSON.stringify(Object.keys(item).sort()) !== allowedKeys) throw 'Malformed item'
    })
    const removed = items[position]
    if (removed !== undefined) {
      orderInfo.total = total - removed.price * removed.quantity
      items.splice(position, 1)
      return orderInfo
    }
    throw 'Invalid position'
  }

const app = {
    removeOrderItem
};

module.exports = app;