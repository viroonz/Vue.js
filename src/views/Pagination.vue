<template>
    <div>
        <h1 class="title">Pagination</h1>
        <nav class="Page navigation example">
            <ul class="pagination pagination-lg">
                <li v-for="p in pageTotal" :key="p" class="page-item ">
                    <router-link :to="'/pagedata?p=' + p" :class="className(p)">{{ p }}</router-link>
                </li>
            </ul>
        </nav>
        
        <pre class="card">{{ albums }}</pre>
    </div>
</template>

<script>
import axios from 'axios'

const limit = 9
const url = 'https://jsonplaceholder.typicode.com/albums'

export default {
    watch: {
        '$route.query.p'() {
            this.getAlbums(this.$route.query.p)
        }
    },

    mounted() {
        this.getAlbums(this.$route.query.p)
    },

    methods: {
        async getAlbums(page = 1) {
            this.pageCurrent = parseInt(page)

            const res = await axios.get(url + '?_limit=' + limit + '&_page=' + page)
            this.albums = res.data
            this.pageTotal = Math.ceil(parseInt(res.headers['x-total-count']) / limit)
        },

        className(page) {
            return ['page-link', { 'is-current': page === this.pageCurrent }]
        }
    },
    data() {
        return {
            albums: [],
            pageTotal: 0,
            pageCurrent: 1
        }
    }
}
</script>