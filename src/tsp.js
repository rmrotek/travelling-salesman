import shuffle from '../libs/shuffle'
import GA from './GA'




export default class TSP {
  constructor (el, width, height, onstart, onstop) {
    this.el = el
    this.width = width
    this.height = height
    this.nodes = []
    this.orders = []
    this.r = 4
    this.lw = 2

    this.mutation_rate = 0.05

    this.dr = window.devicePixelRatio || 1

    this.el
      .attr('width', width * this.dr)
      .attr('height', height * this.dr)
      .css({width: Math.min(width, screen.width) + 'px'})

    this.ctx = this.el[0].getContext('2d')
    this.is_running = false

    this._onstart = onstart
    this._onstop = onstop
  }

  // cross function
  xFunc (lf1, lf2) {
    let p1 = Math.floor(Math.random() * (this.n - 2)) + 1
    let p2 = Math.floor(Math.random() * (this.n - p1)) + p1
    let piece = lf2.gene.slice(p1, p2)
    let new_gene = lf1.gene.slice(0, p1)
    piece.concat(lf2.gene).map(i => {
      if (!new_gene.includes(i)) {
        new_gene.push(i)
      }
    })

    return new_gene
  }

  //mutate
  mFunc (gene) {
    let p1 = 0
    let p2 = 0
    let n = gene.length
    while (p1 === p2) {
      p1 = Math.floor(Math.random() * n)
      p2 = Math.floor(Math.random() * n)
    }
    if (p1 > p2) {
      [p1, p2] = [p2, p1]
    }

    let funcs = [
      (g, p1, p2) => {
        // exchange
        let temp = g[p1]
        g[p1] = g[p2]
        g[p2] = temp
      }, (g, p1, p2) => {
        // reverse
        let temp = g.slice(p1, p2).reverse()
        g.splice(p1, p2 - p1, ...temp)
      }, (g, p1, p2) => {
        // move
        let temp = g.splice(p1, p2 - p1)
        g.splice(Math.floor(Math.random() * g.length), 0, ...temp)
      }
    ]

    let random = Math.floor(Math.random() * funcs.length)
    funcs[random](gene, p1, p2)

    return gene
  }

  //get total distance in current route
  getDistance (order = null) {
    let distance = 0
    let {nodes} = this
    order.concat(order[0]).reduce((a, b) => {
      distance += Math.sqrt(Math.pow(nodes[a].x - nodes[b].x, 2) + Math.pow(nodes[a].y - nodes[b].y, 2))
      return b
    })
    return distance
  }
}
