import axios from 'axios'
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {
    constructor(url) {
        if (url === undefined || url === "") {
            url = 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db';
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getVideos() {
        return axios.get(this.withPath('/videos')).then(r => r.data)
    }

    async getSpesificVideo(video) {
        return Promise.resolve({
            "id": 1,
            "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
            "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
            "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
            "title": "Vue.js Course for Beginners [2021 Tutorial]",
            "viewCount": 254,
            "publishDateInMonth": 4,
            "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
            "ownerName": "freeCodeCamp.org",
            "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
        })
    }
}

export default new API('https://my-json-server.typicode.com/modanisa/bootcamp-video-db');
