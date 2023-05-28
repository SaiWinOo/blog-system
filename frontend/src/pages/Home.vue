<template>
    <div class="mx-32">
        <router-link v-for="blog in blogs" :key="blog.id" :to="{name : 'blog-detail', params : {slug : blog.slug}}">
            <PostCard :blog="blog"/>
        </router-link>
    </div>
</template>

<script>
import PostCard from '../components/atoms/PostCard.vue';

export default {
    name: 'Home',
    components: {PostCard},
    inject: ['fetchData'],
    data() {
        return {
            blogs: []
        };
    },
    methods: {
        async fetchBlogs() {
            let res = await this.fetchData('/blogs');
            this.blogs = res.data.blogs.data;
        }
    },
    mounted() {
        this.fetchBlogs();
    },
};
</script>

<style scoped></style>