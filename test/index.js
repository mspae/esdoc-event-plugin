/**
 * A function that emits an event
 *
 * @emits MyEvent
 * @param {number} number My number param
 * @return {number} number
 */
export function emitFunction(number) {
  return number;
}

/**
 * A function that fires an event
 *
 * @fires MyEvent
 */
export function fireFunction() {
}

/**
 * @event MyEvent
 * @property {number} number
 */