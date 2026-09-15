<template>
  <q-page class="login-page">
    <div class="orb orb-a"></div>
    <div class="orb orb-b"></div>
    <main class="login-card">
      <section class="welcome">
        <div class="hospital">
          <div class="logo">
            <img
              src="../../assets/logo-rsud-mohamad-saleh.png"
              alt="Logo RSUD dr. Mohamad Saleh Kota Probolinggo"
            />
          </div>
          <div><b>RSUD dr. Mohamad Saleh</b><small>Kota Probolinggo</small></div>
        </div>
        <div class="system-visual">
          <img
            src="../../assets/sipetakencana-illustration-clean.png"
            alt="Ilustrasi SI PETA KENCANA"
          />
        </div>
        <div class="trust"><q-icon name="verified" /> Terintegrasi · Akuntabel · Terpercaya</div>
      </section>
      <section class="signin">
        <div class="form-wrap">
          <div class="heading">
            <div class="lock"><q-icon name="lock" /></div>
            <div>
              <p>Selamat datang</p>
              <h2>Masuk ke akun Anda</h2>
            </div>
          </div>
          <q-form class="form" @submit="login">
            <label>Username</label
            ><q-input v-model="user" outlined dense placeholder="Masukkan Username"
              ><template #prepend><q-icon name="person_outline" color="teal-7" /></template
            ></q-input>
            <div class="pass-label">
              <label>Kata Sandi</label><a href="#" @click.prevent="forgot">Lupa kata sandi?</a>
            </div>
            <q-input
              v-model="password"
              outlined
              dense
              :type="visible ? 'text' : 'password'"
              placeholder="Masukkan kata sandi"
              ><template #prepend><q-icon name="lock_outline" color="teal-7" /></template
              ><template #append
                ><q-icon
                  class="cursor-pointer"
                  :name="visible ? 'visibility_off' : 'visibility'"
                  @click="visible = !visible" /></template
            ></q-input>
            <q-checkbox
              v-model="remember"
              dense
              color="teal-7"
              label="Ingat saya di perangkat ini"
            /><q-btn
              class="submit"
              unelevated
              no-caps
              type="submit"
              label="Masuk ke Sistem"
              icon-right="arrow_forward"
              :loading="loading"
              :disable="loading"
            />
          </q-form>
          <p class="help">
            <q-icon name="support_agent" /> Butuh bantuan? Hubungi Administrator Sistem
          </p>
        </div>
      </section>
    </main>
    <footer>© {{ year }} RSUD dr. Mohamad Saleh Kota Probolinggo</footer>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useQuasar, LocalStorage } from 'quasar'
import { useRouter } from 'vue-router'
import { api } from '../../boot/axios'

const $q = useQuasar()
const router = useRouter()

const user = ref('')
const password = ref('')
const remember = ref(false)
const visible = ref(false)
const loading = ref(false)

const year = new Date().getFullYear()

async function login () {
  if (!user.value || !password.value) {
    $q.notify({
      message: 'Username dan kata sandi wajib diisi.',
      color: 'negative',
      position: 'top'
    })

    return
  }

  loading.value = true

  try {
    const response = await api.post('v6/login_kencana', {
      username: user.value,
      password: password.value
    })

    const token = response.data.access_token
    const authUser = response.data.user

    // Simpan login ke localStorage
    LocalStorage.set('auth_token', token)
    LocalStorage.set('auth_user', authUser)

    $q.notify({
      message: `Selamat datang, ${authUser.nama}`,
      color: 'positive',
      position: 'top',
      icon: 'check_circle'
    })

    await router.push('/keuangan')
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Tidak dapat terhubung ke server.'

    $q.notify({
      message,
      color: 'negative',
      position: 'top',
      icon: 'error_outline'
    })
  } finally {
    loading.value = false
  }
}

function forgot () {
  $q.notify({
    message: 'Silakan hubungi Administrator Sistem untuk reset kata sandi.',
    color: 'blue-grey-8',
    position: 'top'
  })
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
.login-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  padding: 40px 24px 64px;
  background: #edf7f5;
  font-family: 'DM Sans', sans-serif;
}
.orb {
  display: none;
}
.login-card {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  width: min(1050px, 100%);
  min-height: 610px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 35px rgba(28, 65, 59, 0.16);
  animation: card-enter 500ms ease-out both;
}
.welcome {
  color: #fff;
  padding: 38px 48px 30px;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at 78% 38%, rgba(49, 181, 146, 0.36) 0, transparent 42%),
    linear-gradient(135deg, #034c4c 0%, #086d66 52%, #109b82 100%);
  border-right: 5px solid #e1b23b;
  position: relative;
  overflow: hidden;
}
.welcome::after {
  content: '';
  position: absolute;
  inset: -35%;
  background: linear-gradient(
    115deg,
    transparent 38%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 62%
  );
  transform: translateX(-28%) rotate(5deg);
  animation: soft-shine 16s ease-in-out infinite;
  will-change: transform;
  pointer-events: none;
}
.hospital,
.system-visual,
.trust {
  position: relative;
  z-index: 1;
}
@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes soft-shine {
  0%,
  100% {
    transform: translateX(-28%) rotate(5deg);
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
  }
  50% {
    transform: translateX(28%) rotate(5deg);
    opacity: 0.7;
  }
}
@media (prefers-reduced-motion: reduce) {
  .login-card,
  .welcome::after {
    animation: none;
  }
}
.hospital {
  display: flex;
  align-items: center;
  gap: 13px;
}
.logo {
  background: #fff;
  border-radius: 8px;
  width: 58px;
  height: 58px;
  padding: 3px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.hospital b {
  display: block;
  font-size: 14px;
}
.hospital small {
  display: block;
  opacity: 0.78;
  font-size: 12px;
}
.system-visual {
  display: grid;
  place-items: center;
  flex: 1;
  padding: 18px 0 10px;
}
.system-visual img {
  width: min(100%, 480px);
  max-height: 370px;
  object-fit: contain;
  filter: drop-shadow(0 12px 14px rgba(0, 42, 40, 0.22));
}
.trust {
  padding-top: 23px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
  font-weight: 500;
}
.signin {
  background: #fff;
  display: grid;
  place-items: center;
}
.form-wrap {
  width: min(350px, calc(100% - 56px));
}
.heading {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 36px;
}
.lock {
  width: 44px;
  height: 44px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: #08766f;
  background: #e9f7f3;
}
.heading p {
  margin: 0 0 3px;
  color: #78908d;
  font-size: 13px;
}
.heading h2 {
  margin: 0;
  color: #173c3b;
  font:
    700 21px 'Plus Jakarta Sans',
    sans-serif;
  letter-spacing: -0.6px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.form > label,
.pass-label label {
  color: #315b57;
  font-size: 13px;
  font-weight: 700;
}
.pass-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.pass-label a {
  color: #11867b;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}
.form :deep(.q-field__control) {
  border-radius: 7px;
  min-height: 48px;
}
.form :deep(.q-field--outlined .q-field__control:before) {
  border-color: #d9e5e2;
}
.form :deep(.q-checkbox) {
  margin: 9px 0 14px;
  color: #5f7875;
  font-size: 13px;
}
.submit {
  height: 50px;
  border-radius: 7px;
  color: #fff;
  font-weight: 700;
  background: #08736d;
  box-shadow: none;
}
.help {
  margin: 27px 0 0;
  text-align: center;
  color: #78908d;
  font-size: 12px;
}
.help .q-icon {
  color: #d59b10;
}
footer {
  position: absolute;
  z-index: 1;
  bottom: 24px;
  color: #6c8985;
  font-size: 12px;
}
@media (max-width: 760px) {
  .login-page {
    display: block;
    padding: 22px 17px 54px;
  }
  .login-card {
    min-height: auto;
    grid-template-columns: 1fr;
    border-radius: 10px;
  }
  .welcome {
    min-height: 350px;
    padding: 27px 28px 25px;
  }
  .system-visual {
    padding: 14px 0 6px;
  }
  .system-visual img {
    max-height: 260px;
  }
  .signin {
    padding: 39px 0 43px;
  }
  .form-wrap {
    width: calc(100% - 48px);
  }
  footer {
    left: 0;
    right: 0;
    text-align: center;
    bottom: 20px;
    font-size: 10px;
  }
}
</style>
