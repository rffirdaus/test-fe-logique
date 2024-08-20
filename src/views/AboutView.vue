<template>
  <div class="relative h-screen overflow-hidden">
    <SearchModal
      v-if="showModal"
      @search="onHandleSearch"
      @close="showModal = false"
    />
    <header class="header w-full flex top-0 left-0 justify-between p-4 sm:bg-custom-gradient" :class="!showModal ? 'fixed' : 'relative'">
      <button>
        <img src="@/assets/images/menu.svg" alt="menu" width="14" height="14" />
      </button>
      <img src="@/assets/images/ngmusic.svg" alt="ngmusic" width="72" height="auto" />
      <button @click="showModal = true">
        <img src="@/assets/images/search.svg" alt="search" width="14" height="14" />
      </button>
    </header>
    <div class="flex w-full items-center justify-center gap-[10px] mt-20">
      <p class="text-sm font-normal text-[#334155]">
        Search result for : <span class="text-[#7b34dd] font-bold">{{ searchTerm }}</span>
      </p>
    </div>
    <div class="flex flex-col items-center justify-start gap-[38px] px-[15px] pb-[28px] mt-4 h-[438px] overflow-x-auto">
      <Card v-for="(item, i) in tracks" :key="i" :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import Card from '../components/list.vue';
import SearchModal from '../components/searchModal.vue';

export default defineComponent({
  name: 'CardList',
  components: {
    Card,
    SearchModal
  },
  data() {
    return {
      searchTerm: this.$route.params.slug,
      tracks: [],
      showModal: false,
    };
  },
  mounted() {
    this.fetchMusic()
  },
  methods: {
    onHandleSearch(data: any) {
      this.searchTerm = data
      this.$router.push({ path: `/play-list/${data}` })
      this.fetchMusic()
    },
    async fetchMusic() {
      if (this.searchTerm === '') {
        this.tracks = [];
        return;
      }

      try {
        const response = await axios.get(
          `https://itunes.apple.com/search?term=${this.searchTerm}&entity=musicTrack&limit=10`
        );
        this.tracks = response.data.results
        this.showModal = false
      } catch (error) {
        console.error('Error fetching music:', error);
        this.tracks = [];
      }
    },
  }
});
</script>

<style scoped>
.header::after {
  display: block;
  content: "";
  height: 280px;
  width: 1000px;
  position: absolute;
  z-index: -1;
  background-image: linear-gradient(153deg, #712bda 30%, #a45deb 130%);
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  box-shadow: rgba(148, 77, 230, 0.75) 0px 0px 6px 0px;
  border-radius: 50%;
}
</style>