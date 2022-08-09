class ValuesService {
  constructor(dbContext) {
    this.dbContext = dbContext
  }

  async getValues() {
    const vals = await this.dbContext.Values.find({})
    return vals
  }
}

module.exports = {
  ValuesService
}