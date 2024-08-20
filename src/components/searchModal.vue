<template>
  <div class="absolute z-50 h-screen w-full bg-[#1c1c2de6]">
    <div class="flex justify-end w-full p-2 cursor-pointer" @click="closeModal">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M.293 12.293a1 1 0 1 0 1.414 1.414L.293 12.293zM13.707 1.707A1 1 0 0 0 12.293.293l1.414 1.414zm-12-1.414A1 1 0 0 0 .293 1.707L1.707.293zm10.586 13.414a1 1 0 0 0 1.414-1.414l-1.414 1.414zm-10.586 0 12-12L12.293.293l-12 12 1.414 1.414zm-1.414-12 12 12 1.414-1.414-12-12L.293 1.707z" fill="#fff"/>
      </svg>
    </div>
    <div class="flex justify-center items-center h-full">
      <div>
        <p class="font-roboto text-xl font-bold text-white mb-4">Search</p>
        <div class="flex flex-col gap-[15px]">
          <input
            id="search"
            name="search"
            v-model="search"
            class="w-[280px] rounded-full bg-white py-[13px] text-center font-roboto text-xs font-medium text-text"
            type="text"
            placeholder="Artist / Album / Title"
          />
          <button
            class="-72 h-10 rounded-3xl bg-custom-button text-white text-sm"
            @click="onSubmit"
            :disabled="!search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchModal',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search', this.search)
    },
    closeModal() {
      this.$emit('close')
    }
  }
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>