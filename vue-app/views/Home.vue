<template>
  <div class="content">
      <Video :data-id="video.id" id="video" class="video" v-for="video in videos" :key="video.id" :video="video" />
  </div>
</template>

<script>
import axios from "axios";
import Video from '../src/components/Video.vue';

export default {
  components: { Video },
  created() {
    this.getVideos();
  },
  data() {
      return {
          videos: []
      }
  },
  methods: {
    getVideos() {
      axios
        .get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
        .then((res) => {
          this.videos = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.content{
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    height: 100vh;
}

.video{
    flex: 1 0 21%;
}
</style>
