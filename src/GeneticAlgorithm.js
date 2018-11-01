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
    this.scores = 0 
    this.best = null

    this.rate = options.rate
    this.xFunc = options.xFunc
    this.mFunc = options.mFunc

    for (let i = 0; i < this.life_count; i++) {
      this.lives.push(new Life(this.gene_length))
    }
  }


}
