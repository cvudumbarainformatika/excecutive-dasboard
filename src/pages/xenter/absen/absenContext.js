import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useJadwal } from 'src/stores/xenter/absensi/jadwal'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)
import { useQuasar } from 'quasar'

export function useAbsenContext (time = 1000) {
  const $q = useQuasar()
  const jam = ref(dayjs().locale('id').format('HH:mm:ss'))
  const hari = ref(dayjs().locale('id').format('dddd'))
  const tgl = ref(dayjs().locale('id').format('YYYY-MM-DD HH:mm:ss'))
  const cond = ref('idle')
  const scheduleStorrage = ref(null)

  const jadwal = useJadwal()
  // let timerId

  function init () {
    const schedule = $q?.localStorage.getItem('newSchedule')
    if (!schedule) {
      cond.value = 'idle'
      cariSchedule()
    } else {
      // cond.value = 'start'
      // console.log('local storage jadwal', schedule)
      if (cond.value === 'idle') {
        cond.value = 'start'
      }
      // if (cond.value !== 'idle') {
      //   // start interval
      //   timerId = setInterval(start, 1000)
      // } else {
      //   clearInterval(timerId)
      // }
    }
  }

  function cariSchedule () {
    const asyncStorrage = $q.localStorage
    asyncStorrage.remove('newSchedule')
    const hariIni = dayjs().locale('id').format('YYYY-MM-DD')
    let mulaiWaktuMasuk = null
    let mulaiWaktuPulang = null
    let stopWaktuAbsen = null
    let statusStorrage = null
    let kategoryStorrage = null

    const jadwalApi = jadwal.getCurrentJadwal(hari.value)

    const isLibur = jadwalApi ? jadwalApi.status === '1' || jadwalApi.status === 1 : false

    if (!isLibur) { // jika masuk
      if (jadwalApi) {
        // eslint-disable-next-line camelcase
        const { masuk, status, pulang, kategory_id } = jadwalApi
        mulaiWaktuMasuk = dayjs(hariIni + ' ' + masuk).subtract(30, 'minute').format('YYYY-MM-DD HH:mm:ss')
        statusStorrage = status
        // eslint-disable-next-line camelcase
        kategoryStorrage = kategory_id
        if (masuk > pulang) {
          mulaiWaktuPulang = dayjs(hariIni + ' ' + pulang).add(1, 'day').format('YYYY-MM-DD HH:mm:ss')
        } else {
          mulaiWaktuPulang = dayjs(hariIni + ' ' + pulang).format('YYYY-MM-DD HH:mm:ss')
        }

        stopWaktuAbsen = dayjs(mulaiWaktuPulang).add(2, 'hour').format('YYYY-MM-DD HH:mm:ss') // tambah 2 jam

        // console.log('masuk', mulaiWaktuMasuk)
        // console.log('pulang', mulaiWaktuPulang)
        // console.log('status', statusStorrage)
        // console.log('stop waktu absen', stopWaktuAbsen)
      } else { // jika libur
        mulaiWaktuMasuk = null
        mulaiWaktuPulang = null
        stopWaktuAbsen = null
        statusStorrage = '1'
        kategoryStorrage = null
      }
    }

    const newJadwals = {
      mulaiWaktuMasuk,
      mulaiWaktuPulang,
      stopWaktuAbsen,
      statusStorrage,
      kategoryStorrage
    }

    console.log('cari schedule ...', newJadwals)
    saveScheduleToStorrage(newJadwals)
  }

  function saveScheduleToStorrage (val) {
    cond.value = 'start'
    const asyncStorrage = $q.localStorage
    asyncStorrage.set('newSchedule', val)
  }

  // eslint-disable-next-line no-unused-vars
  const start = () => {
    // const waktuBerjalan = dayjs().locale('id').format('YYYY-MM-DD HH:mm:ss')
    const schedule = $q?.localStorage.getItem('newSchedule')
    scheduleStorrage.value = schedule
    tgl.value = dayjs().locale('id').format('YYYY-MM-DD HH:mm:ss')

    if (schedule) {
      if (schedule.statusStorrage !== '1') {
        const { mulaiWaktuMasuk, mulaiWaktuPulang, stopWaktuAbsen } = schedule
        // eslint-disable-next-line no-unused-vars
        // const starting = dayjs(tgl.value).locale('id').isSameOrBefore(mulaiWaktuMasuk, 'minute')
        const intervalJamMasuk = dayjs(tgl.value).isBetween(mulaiWaktuMasuk, mulaiWaktuPulang, 'minute')
        // eslint-disable-next-line no-unused-vars
        const intervalJamPulang = dayjs(tgl.value).isBetween(mulaiWaktuPulang, stopWaktuAbsen, 'minute')
        const finish = dayjs(tgl.value).isSameOrAfter(stopWaktuAbsen, 'hour')
        if (intervalJamMasuk) {
          cond.value = 'masuk'
        } else if (intervalJamPulang) {
          cond.value = 'pulang'
        } else if (finish) {
          cond.value = 'idle'
        }
      } else {
        cond.value = 'idle'
      }

      console.log('Timer is running...')
    }
  }

  onMounted(() => {
    jadwal.getJadwals('no')
      .then(() => init())
  })

  onUnmounted(() => {
    // clearInterval(timerId)
  })

  watch(cond, (n, old) => {
    // console.log('new watch', n)
    // console.log('old watch', old)
    init()
  })

  return {
    jam,
    tgl,
    dayjs,
    hari,
    cond,
    scheduleStorrage,
    start
  }
}
