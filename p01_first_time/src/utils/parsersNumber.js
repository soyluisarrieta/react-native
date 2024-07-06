const parseThousands = (value) => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

export { parseThousands }
