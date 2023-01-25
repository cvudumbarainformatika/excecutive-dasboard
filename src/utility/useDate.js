
// import { reactive } from 'vue'

export default function useDate () {
  // const state = reactive({
  //   date: new Date(),
  //   years: null
  // })

  const currentYear = () => {
    return new Date().getFullYear().toString()
  }
  const yearIntervals = () => {
    const years = []
    for (let i = 0; i < 5; i++) {
      years.push(subtractYears(i))
    }
    return years
  }

  function subtractYears (num) {
    const date = new Date()
    date.setFullYear(date.getFullYear() - num)
    return date.getFullYear().toString()
  }

  return { currentYear, yearIntervals }
}
