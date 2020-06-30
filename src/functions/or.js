import isRule from '../private/is-rule'
import evaluateRule from '../private/evaluate-rule'

export default (...rules) => {
  // throw if one or more of the rules are
  // not rules
  if (!rules.every(x => isRule(x))) {
    throw new Error('Regent: or requires all arguments to be a function')
  }

  return data => rules.some(x => evaluateRule(x, data))
}
