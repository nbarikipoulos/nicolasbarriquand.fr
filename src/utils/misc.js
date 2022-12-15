const _toObj = (dateAsString, month, locale = 'en-GB') => {
  const date = new Date(dateAsString)
  const extraShort = month === 'short' ? '.' : ''
  return {
    month: date.toLocaleString(locale, { month }) + extraShort,
    year: date.getFullYear().toString().slice(-2)
  }
}

const formatDate = (
  date, // yyyy-mm
  month,
  locale
) => {
  const d = _toObj(date, month, locale)

  return `${d.month} ${d.year}`
}

const formatDateRange = (
  date1, // yyyy-mm
  date2, // yyyy-mm
  month,
  locale
) => {
  let result = ''

  const dates = [date1, date2].map(d => _toObj(d, month, locale))

  const isSameYear = dates[0].year === dates[1].year

  result += `${dates[0].month} `
  result += isSameYear ? '' : dates[0].year
  result += ` - ${dates[1].month} ${dates[1].year}`

  return result
}

export {
  formatDate,
  formatDateRange
}
