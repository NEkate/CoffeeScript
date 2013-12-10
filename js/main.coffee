class Animal
  x = 0

  constructor: ->
    x++

  move: (meters) ->
    alert @name + " moved #{meters}m."

  @getX: -> x

obj = new Animal()
obj = new Animal()
obj = new Animal()
obj = new Animal()

console.log Animal.getX()