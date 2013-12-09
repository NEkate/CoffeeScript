do ->
  class animals
    constructor: (@name) ->

    move: (meters) ->
      console.log @name + "moved #{meters}m."