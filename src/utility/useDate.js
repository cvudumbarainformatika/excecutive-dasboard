
// import { reactive } from 'vue'
import { date } from 'quasar'

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

  const dateDbFormat = (val) => {
    return date.formatDate(val, 'YYYY-MM-DD')
  }
  const arrBulan = (val) => {
    return ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  }

  return { currentYear, yearIntervals, dateDbFormat, arrBulan }
}
