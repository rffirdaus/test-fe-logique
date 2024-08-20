<template>
  <div class="flex w-[310px] relative items-center justify-center gap-3 rounded-[10px] bg-white px-[10px] py-3 shadow-sm">
    <img
      :src="data.artworkUrl100"
      alt=""
      height="100"
      width="100"
      class="rounded-[10px]"
    />
    <img src="@/assets/images/play.svg" alt="playIcon" class="absolute rounded-lg left-[19%] top-[51%]" style="transform: translate(-50%, -50%);">
    <div class="flex flex-1 flex-col items-start justify-start">
      <p class="mb-[5px] font-roboto text-xs font-medium text-dark">
        {{ data.artistName }}
      </p>
      <p class="mb-[27px] font-roboto text-sm font-bold text-dark">
        {{ data.trackName }}
      </p>
      <div class="flex w-full items-center justify-between">
        <p class="rounded-full bg-[#10b981] px-[13px] py-[5px] font-roboto text-[10px] font-medium text-white">
          {{ data.primaryGenreName }}
        </p>

        <div class="flex gap-[6px]">
          <img src="@/assets/images/currency-dollar.svg" alt="currency" width="16" height="16" />
          <p class="font-roboto text-xs font-bold text-warning">
            {{ data.trackPrice }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>