// Date

const dateDisplay = document.querySelector('.date')

const today = new Date()
const date = today.getDate() // the date, today is the 4th
const day = today.getDay() // the day of the week
const fullYear = today.getFullYear()
const hours = today.getHours()
const isoString = today.toISOString()

// ////////////////

const christmas = new Date('2021-12-24T14:42:17.833Z')

const millisecondsToXmas = christmas - today

const minutes = (millisecondsToXmas / 60000).toString()

dateDisplay.textContent = Math.round(minutes)
