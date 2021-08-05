
function start() {
  return { type: 'START'}
}
function reset() {
  return { type: 'RESET'}
}
function stop() {
  return { type: 'STOP'}
}
function tick() {
  return { type: 'TICK'}
}

export {
  start, reset, stop, tick
};