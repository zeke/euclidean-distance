// http://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions

const euclideanDistance = (a, b) =>
  Math.sqrt(a.reduce((acc, _, n) => acc + ((a[n] - b[n]) ** 2), 0))

module.exports = euclideanDistance
