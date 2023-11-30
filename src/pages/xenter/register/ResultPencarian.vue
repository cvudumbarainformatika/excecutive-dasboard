<template>
  <div class="column flex-center fullscreen mellek">
    <!-- <div class="text-white">sadas</div> -->
    <div>
      <div class="bulatan column flex-center z-top">
       <img
          :src="getImage()"
          style="width: 75%;" />
      </div>

    </div>
    <div class="tempat-tulisan column text-center relative-position">
        <div class="f-12" style="margin-top:70px">

          <div class="text-weight-bold">NAMA ORANGNYA</div>
          <div class="f-12 q-py-sm">Nip : </div>
          <div>Status Register</div>
        </div>
        <div class="absolute-bottom">
          <q-btn color="primary" class="full-width" square>OK</q-btn>
        </div>
    </div>

  </div>
</template>

<script setup>

function getImage () {
  return new URL('../../../assets/images/user-man.svg', import.meta.url).href
}
</script>

<style lang="scss" scoped>
.mellek {
  background-color: rgba(0, 0, 0, 0.712);
}

.bulatan {
  background-color: $grey;
  opacity: 1;
  width:120px;
  height:120px;
  border-radius: 50%;
  border: 4px solid white;
  position: relative;
  .spinn {
    position: absolute;
    left: 50%;
    top: 50%;
  }
}

.tempat-tulisan {
  width: 70vw;
  min-height: 250px;
  background-color: white;
  border-radius: 5px;
  margin-top: -50px;
  opacity: 1;
  // position: absolute;
  // left: 50%;
}
</style>
