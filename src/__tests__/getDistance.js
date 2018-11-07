

var nodes = [{x: 102, y: 335}, {x: 603, y: 133}, {x: 425, y: 290}, {x: 740, y: 573}]
let orders = [1, 3, 0, 2, 1]

//total dist 1705.2468610850822
//each distance ["460.84", "680.95", "326.12", "237.35", "0.00"]

function getDistance(order = null) {
  let distanceTotal = 0
  
  order.concat(order[0]).reduce((a, b) => {
    let currentDistance = Math.hypot((nodes[a].x - nodes[b].x), (nodes[a].y - nodes[b].y))
    distanceTotal += currentDistance
    
    return b
  })
  return distanceTotal
}



function getEachDistance(order = null) {
  let distanceArr=[];
  
  order.concat(order[0]).reduce((a,b) => {
    let currentDistance = (Math.hypot((nodes[a].x - nodes[b].x), (nodes[a].y - nodes[b].y))).toFixed(2)
    distanceArr.push(currentDistance)

    return b
  })
  return distanceArr
}

test('get total distance between points', () => {
  expect(getDistance(orders)).toBe(1705.2468610850822)
})

test('get distance between each points', () => {
  expect(getEachDistance(orders)).toEqual(["460.84", "680.95", "326.12", "237.35", "0.00"])
})