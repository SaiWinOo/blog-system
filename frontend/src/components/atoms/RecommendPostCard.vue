<template>
    <router-link :to="{name : 'blog-detail', params : {slug : blog?.slug}}">
        <div>
            <img :src="blog?.image" alt="" class="w-full h-[150px] object-cover rounded-sm">
        </div>
        <div class="mt-3">
            <div class="flex gap-3 my-3">
                <img :src="blog?.user?.profile_url" alt="" class="w-[25px] h-[25px] rounded-full">
                <span>{{ blog?.user?.name }}</span>
            </div>
            <div>
                <h3 class="text-lg font-semibold">{{ blog?.title }}</h3>
                <span>
                    {{ blog?.body?.slice(0, 70) + '...' }}
                </span>
            </div>
            <div class="flex gap-3 my-3 text-gray-500">
                <span>{{ blog?.duration }} min read</span> .
                <span>{{ $formatDate(blog?.created_at, _, 'MMM Do YY') }}</span>
            </div>
            <ClapSection class="!px-0"/>
        </div>
    </router-link>
</template>

<script>
import ClapSection from '../common/ClapSection.vue';

export default {
    name: 'RecommendPostCard',
    components: {ClapSection},
    inject: ['$formatDate'],
    props: {
        blog: {
            type: Object,
        },
    },
};
</script>

<style scoped>

</style>