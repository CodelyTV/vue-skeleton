function isNumeric(value: string | number): value is number {
  return !isNaN(+value) && isFinite(+value)
}

export function parseVal(value: string | number | undefined, defaultUnit = 'px'): string | undefined {
  if (typeof value === 'undefined')
    return undefined

  if (isNumeric(value))
    return value + defaultUnit

  const res = String(value).match(/(-?[\d.]+)([a-z%]*)/)

  if (!res)
    return undefined

  return parseFloat(res[1]) + res[2]
}
