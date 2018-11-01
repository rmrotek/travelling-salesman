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


  // Calculate the score of each individual based on the method passed in
  doRate () {
    //let last_avg = this.scores / this.life_count
    this.scores = 0
    let last_best_score = -1

    this.lives.map(lf => {
      lf.setScore(this.rate(lf.gene))
      if (lf.score > last_best_score) {
        last_best_score = lf.score
        this.best = lf
      }
      this.scores += lf.score
    })
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

  // According to the score, randomly get an individual, the probability is proportional to the individual's score attribute
  getOne () {
    let {scores, lives} = this
    let r = Math.random() * scores

    for (let i = 0, l = lives.length; i < l; i++) {
      let lf = lives[i]
      r -= lf.score
      if (r <= 0) {
        return lf
      }
    }
  }

  newChild () {
    return this.bear(this.getOne(), this.getOne())
  }

  next () {
    this.generation++

    this.doRate()
    let new_lives = []
    new_lives.push(this.best) // join best match
    new_lives.push(new Life(this.gene_length)) // add random value
    while (new_lives.length < this.life_count) {
      new_lives.push(this.newChild())
    }
    this.lives = new_lives

    //console.log(this.best.score)
    return this.best.gene.slice(0)
  }

}
