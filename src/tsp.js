import shuffle from '../utils/shuffle'
import GA from './GeneticAlgorithm'




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

  makeRandomNodes (n = 32, life_count = 100) {
    this.is_running = false
    this.n = n
    this.life_count = life_count
    this.nodes = []
    this.orders = []

    let padding = 20

    for (let i = 0; i < n; i++) {
      this.nodes.push({
        x: Math.floor(Math.random() * (this.width - padding * 2)) + padding,
        y: Math.floor(Math.random() * (this.height - padding * 2)) + padding
      })
      this.orders.push(i)
    }

    shuffle(this.orders)
    this.orders.push(this.orders[0])

    this.ga = new GA({
      life_count: this.life_count,
      mutation_rate: this.mutation_rate,
      gene_length: this.n,
      rate: this.rate.bind(this),
      xFunc: this.xFunc.bind(this),
      mFunc: this.mFunc.bind(this)
    })
  }

  rate (gene) {
    return 1 / this.getDistance(gene)
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

  render () {
    let {ctx, r, nodes, dr} = this
    ctx.clearRect(0, 0, this.width * dr, this.height * dr)

    ctx.lineWidth = this.lw * dr
    ctx.strokeStyle = 'rgba(64, 64, 64, 0.2)'

    // lines
    this.orders.concat(this.orders[0]).reduce((a, b) => {
      //console.log(a, '->', b)
      let na = nodes[a]
      let nb = nodes[b]
      ctx.beginPath()
      ctx.moveTo(na.x * dr, na.y * dr)
      ctx.lineTo(nb.x * dr, nb.y * dr)
      ctx.stroke()
      return b
    })

    ctx.lineWidth = 1 * dr
    ctx.strokeStyle = '#900'
    ctx.fillStyle = '#f66'
    // nodes
    nodes.map(n => {
      ctx.beginPath()
      ctx.arc(n.x * dr, n.y * dr, r * dr, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    })
    $('#gen').html(this.ga.generation)
    //$('#mutation').html(this.ga.mutation_count)
  }
}
