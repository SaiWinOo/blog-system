<template>
    <div class="mx-auto w-[46%] flex justify-center flex-col my-10">
        <div v-if="blog?.image">
            <img alt="" class="w-[500px] mx-auto" src="./../assets/images/logo.jpg">
        </div>
        <div class="my-5 mx-auto ">
            <h4 class="text-4xl font-bold">{{ blog?.title }}</h4>
            <div class='flex items-center my-5'>
                <img :src=blog?.user?.profile_url alt="logo" class="w-[35px] h-[35px] rounded-full">
                <div class='flex flex-col'>
                    <div>
                        <span class="mx-3 font-semibold">{{ blog?.user?.name }} .</span>
                        <button class="text-green-400">
                            follow
                        </button>
                    </div>
                    <div class="text-sm">
                        <span class="mx-3">{{ blog?.duration }} min read .</span>
                        <span>
                        {{ $formatDate(blog?.created_at, _, 'll') }}
                     </span>
                    </div>
                </div>
            </div>
        </div>
        <ClapSection :claps="Number(blog?.claps_sum_count)" :comments="blog?.comments_count"/>
        <div class="my-5">
            <p class="blog-body" v-html="blog.body">
            </p>
        </div>
    </div>
    <div class="py-20 mt-14 bg-gray-100">
        <div class="w-[46%] mx-auto px-5">
            <div>
                <div>
                    <img :src="blog?.user?.profile_url" alt="" class="w-[70px] h-[70px] rounded-full">
                </div>
                <div class="flex items-start justify-between">
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold my-2">Written By {{ blog?.user?.name }}</span>
                        <span class="my-1">5k followers</span>
                        <span>I am a Software Engineer</span>
                    </div>
                    <div class="flex items-center mt-2 gap-3">
                        <Button>Follow</Button>
                        <button>
                            <Email class="rounded-full"/>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border border-1 my-7"></div>
            <p class="my-5">More from <span class="font-semibold">{{ blog?.user?.name }}</span></p>
            <div class="grid grid-cols-2 gap-5">
                <RecommendPostCard :blog="blog"/>
                <RecommendPostCard :blog="blog"/>
            </div>
        </div>
    </div>
</template>

<script>

import Button from '../components/atoms/Button.vue';
import Email from '../components/icons/Email.vue';
import RecommendPostCard from '../components/atoms/RecommendPostCard.vue';
import ClapSection from '../components/common/ClapSection.vue';

export default {
    name: 'BlogDetail',
    components: {ClapSection, RecommendPostCard, Email, Button},
    inject: ['fetchData', '$formatDate'],
    data() {
        return {
            blog: {}
        };
    },
    methods: {
        async fetchBlog() {
            let uri = '/blogs/' + this.$route.params.slug;
            let res = await this.fetchData(uri);
            this.blog = res.data.blog;
            console.log(res.data);
        }
    },
    mounted() {
        this.fetchBlog();
    }
};
</script>

<style scoped>
.blog-body {
    line-height: 30px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.77);
}
</style>