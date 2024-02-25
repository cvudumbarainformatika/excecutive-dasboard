import { onMounted, ref } from 'vue'
import { useJadwal } from 'src/stores/xenter/absensi/jadwal'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { useQuasar } from 'quasar'

export function useAbsenContext (time = 1000) {
  const $q = useQuasar()
  const jam = ref(dayjs().locale('id').format('HH:mm:ss'))
  const hari = ref(dayjs().locale('id').format('dddd'))
  const tgl = ref(dayjs().locale('id').format('YYYY-MM-DD HH:mm:ss'))
  const cond = ref('idle')

  const jadwal = useJadwal()

  function init () {
    console.log($q)
    // tgl.value = dayjs().locale('id').format('YYYY-MM-DD HH:mm:ss')
    // jam.value = dayjs().locale('id').format('HH:mm:ss')
    // hari.value = dayjs().locale('id').format('dddd')

    // const t = '2024-02-25 23:00:00'
    // let timerId
    // if (tgl.value <= t) {
    //   timerId = setInterval(start, 1000)
    //   cond.value = 'start'
    // } else {
    //   clearInterval(timerId)
    // }
  }

  // eslint-disable-next-line no-unused-vars
  function start () {
    console.log('Timer is running...')
  }

  onMounted(() => {
    jadwal.getJadwals('no')
    init()
  })

  return {
    jam,
    tgl,
    dayjs,
    hari,
    cond
  }
}
