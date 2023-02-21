<template>
  <div class="absolute bg-loading" style="width:100%; height:100%; max-height: 800px; z-index: 100;">
     <div class="full-width full-height column justify-center items-center content-center">
       <app-lottie url="123652-financial-charts-and-statistics-on-tab-with-up-arrow.json" :height="350" :width="350"  />
       <div class="f-14 text-grey-7">Harap Tunggu ...</div>
     </div>
    </div>
</template>
<style lang="scss" scoped>
.bg-loading {
  background-color: #ffffffea;
}
</style>
