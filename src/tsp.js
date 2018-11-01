import shuffle from './utils/shuffle'
import GA from './GeneticAlgorithm'
import wait from './utils/wait'




export default class TSP {
  constructor(el, width, height, onstart, onstop) {
    this.el = el
    this.width = width
    this.height = height
    this.nodes = []
    this.orders = []
    this.radius = 8
    this.lw = 2

    this.mutation_rate = 0.05

    this.deviceRatio = window.devicePixelRatio || 1

    this.el
      .attr('width', width * this.deviceRatio)
      .attr('height', height * this.deviceRatio)
      .css({ width: Math.min(width, screen.width) + 'px' })

    this.ctx = this.el[0].getContext('2d')
    this.is_running = false

    this._onstart = onstart
    this._onstop = onstop
  }

  makeRandomNodes(n = 32, life_count = 100) {
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

  rate(gene) {
    return 1 / this.getDistance(gene)
  }

  // cross function
  xFunc(lf1, lf2) {
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
  mFunc(gene) {
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
  getDistance(order = null) {
    let distance = 0
    let { nodes } = this
    order.concat(order[0]).reduce((a, b) => {
      distance += Math.sqrt(Math.pow(nodes[a].x - nodes[b].x, 2) + Math.pow(nodes[a].y - nodes[b].y, 2))
      return b
    })
    $('#total-distance').html(distance)
    return distance
  }

  render() {
    let { ctx, radius, nodes, deviceRatio } = this
    ctx.clearRect(0, 0, this.width * deviceRatio, this.height * deviceRatio)

    ctx.lineWidth = this.lw * deviceRatio
    ctx.strokeStyle = 'rgba(64, 64, 64, 0.2)'

    // lines
    this.orders.concat(this.orders[0]).reduce((a, b) => {
      console.log(a, '->', b)
      let na = nodes[a]
      let nb = nodes[b]
      ctx.beginPath()
      ctx.moveTo(na.x * deviceRatio, na.y * deviceRatio)
      ctx.lineTo(nb.x * deviceRatio, nb.y * deviceRatio)
      ctx.stroke()

      return b
    })


    console.log(this.orders)
    //draw current route
    $('#path').html(this.orders.reduce(function (a, b) {
      return a.concat(b).concat(" => ");
    }, []).slice(0, -1))


    ctx.lineWidth = 1 * deviceRatio
    ctx.strokeStyle = '#900'
    ctx.fillStyle = '#000'
    ctx.font = ' bolder 15px arial '

    // nodes
    //draw index nr
    for (let i = 0; i < nodes.length; i++) {
      ctx.fillText(i, nodes[i].x, (nodes[i].y))
    }

    $('#gen').html(this.ga.generation)
    $('#mutation').html(this.ga.mutation_count)
  }

  async run() {
    let last_best_score = -1
    let last_best_gen = 0

    while (this.is_running) {
      this.orders = this.ga.next()

      let { best, generation } = this.ga

      if (last_best_score !== best.score) {
        last_best_score = best.score
        last_best_gen = generation
      } else if (generation - last_best_gen >= 5000) {
        // auto stop on results
        this.stop()
        break
      }

      if (this.ga.generation % 10 === 0) {
        this.render()
      }
      await wait(1)
    }
  }

  start() {
    this.is_running = true
    this.run()
    if (typeof this._onstart === 'function') {
      this._onstart()
    }
  }

  stop() {
    this.is_running = false

    if (typeof this._onstop === 'function') {
      this._onstop()
    }
  }
}

