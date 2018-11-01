import Life from './Life'

export default class GA {
  constructor (options) {
    this.x_rate = options.x_rate || 0.7
    this.mutation_rate = options.mutation_rate || 0.005
    this.life_count = options.life_count || 50
    this.gene_length = options.gene_length || 100
    this.mutation_count = 0
    this.generation = 0
    this.lives = []
    this.scores = 0 //total score
    this.best = null

    this.rate = options.rate
    this.xFunc = options.xFunc
    this.mFunc = options.mFunc

    for (let i = 0; i < this.life_count; i++) {
      this.lives.push(new Life(this.gene_length))
    }
  }

  bear (p1, p2) {
    // generate descendants, based on p1 & p2 
    let gene
    if (Math.random() < this.x_rate) {
      // use 'cross' function from tsp
      gene = this.xFunc(p1, p2)
    } else {
      gene = p1.gene.slice(0)
    }

    if (Math.random() < this.mutation_rate) {
      // use 'mutate' function from tsp
      gene = this.mFunc(gene)
      this.mutation_count++
    }

    return new Life(gene)
  }

}
