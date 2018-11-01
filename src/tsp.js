



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
        // exchange, t =temporary
        let t = g[p1]
        g[p1] = g[p2]
        g[p2] = t
      }, (g, p1, p2) => {
        // reverse
        let t = g.slice(p1, p2).reverse()
        g.splice(p1, p2 - p1, ...t)
      }, (g, p1, p2) => {
        // move
        let t = g.splice(p1, p2 - p1)
        g.splice(Math.floor(Math.random() * g.length), 0, ...t)
      }
    ]

    let r = Math.floor(Math.random() * funcs.length)
    funcs[r](gene, p1, p2)

    return gene
  }
}
