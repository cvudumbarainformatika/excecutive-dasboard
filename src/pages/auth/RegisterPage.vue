<template>
  <q-page class="column bg-white">

    <app-loadingxenter v-if="app.loading" />
    <ResultPencarian />
    <div class="q-pa-lg">
      <div class="f-12 text-weight-bold">Cari Data Kepegawaian</div>
      <div class="q-mt-lg row">
        <div class="col-5">
          <q-card flat bordered style="width:100%">
            <q-card-section>
              <div class="f-10">
                <b>Masukkan NIK Anda, </b> Lalu Klik Cari Data dan ikuti langkah selanjutnya
                <br>
                <br>
                Data Anda tidak ditemukan? Harap lapor kepada petugas yang berwenang ...
                <br>
                <br>
                <b>TERIMAKASIH</b>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-img
          :src="getImage()"
          spinner-color="white"
          style="width: 100%;"
        />
        </div>
      </div>

      <div class="q-mt-lg">
        <div class="q-pa-md">
          <q-input placeholder="Masukkan Nik Anda" dense outlined
            v-model="search"
            standout="bg-yellow-3"
            color="primary"
          ></q-input>
        </div>
      </div>
    </div>
    <div class="absolute-bottom full-width">
      <div class="row">
        <q-btn class="col-6 bg-primary" size="lg" no-caps flat color="white" square><div class="f-12" @click="backToLogin">Kembali</div></q-btn>
        <q-btn class="col-6 bg-dark" size="lg" no-caps flat color="white" square><div class="f-12" @click="cariData">Cari Data</div></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ResultPencarian from '../xenter/register/ResultPencarian.vue'
import { useXenterAppStore } from 'src/stores/xenter'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const app = useXenterAppStore()

function backToLogin () {
  router.push({ path: '/login' })
}

function cariData () {
  app.setLoading()
}

function getImage () {
  return new URL('../../assets/images/mad_saleh_menunjuk.png', import.meta.url).href
}
</script>
