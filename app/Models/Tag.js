'use strict'

const Model = use('Model')

class Tag extends Model {

  static get dates () {
    return []
  }

  articles () {
    return this.hasMany('App/Models/Article')
  }
}

module.exports = Tag
