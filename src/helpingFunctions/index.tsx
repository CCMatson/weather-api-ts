
//converts timestamp to milliseconds, then to hours and minutes
export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'NE'

  if (deg > 76 && deg <= 105) return 'E'
  if (deg > 105 && deg <= 165) return 'SE'

  if (deg > 166 && deg <= 195) return 'S'
  if (deg > 195 && deg <= 255) return 'SW'

  if (deg > 255 && deg <= 285) return 'W'
  if (deg > 285 && deg <= 345) return 'NW'

  return 'N'
}
