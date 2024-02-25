
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { onUnmounted, onMounted, ref } from 'vue'

export function useDater (time = 1000) {
  const tgl = ref(null)

  let timer = null

  function start () {
    timer = setInterval(getTgl, time)
  }

  function stop () {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }
  }

  function getTgl () {
    tgl.value = {
      fromJs: dayjs().locale('id'),
      formatDb: dayjs().locale('id').format('YYYY-MM-DD'),
      pukul: dayjs().locale('id').format('HH:mm'),
      pukuls: dayjs().locale('id').format('HH:mm:ss'),
      hari: dayjs().locale('id').format('dddd'),
      bulan: dayjs().locale('id').format('MMMM'),
      blnnNstring: dayjs().locale('id').format('MM'),
      currentmonth: dayjs().locale('id').month(),
      currentYear: dayjs().locale('id').year()
    }
  }
  // const setTimer = setInterval(getTgl, 1000)
  onMounted(start)
  onUnmounted(stop)
  return {
    tgl, dayjs
  }
}
