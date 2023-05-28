<template>
    <div class='max-w-[700px] gap-4 flex items-center justify-between my-2 border-b border-b-1 py-6'>
        <div>
            <div class='flex items-center'>
                <img :src=blog.user.profile_url alt="logo" class="w-[35px] h-[35px] rounded-full">
                <div class='text-sm'>
                    <span class="mx-3">{{ blog.user?.name }}</span>
                    <span>
                        {{ $formatDate(blog.created_at, _, 'll') }}
                     </span>
                </div>
            </div>
            <div>
                <h4 class='text-md font-bold'>{{ blog.title }}</h4>
                <p class='text-sm'>{{ blogBody }}.</p>
            </div>
            <div class='my-4 flex justify-between gap-3'>
                <div class='flex gap-3 items-center text-sm'>
                    <div class='bg-gray-300 px-2 py-1 rounded-full'>{{ blog.topic.name }}</div>
                    <div>{{ blog.duration }} min read</div>
                </div>
                <div class='flex gap-5'>
                    <div>
                        <Save/>
                    </div>
                    <div>
                        <SeeLess/>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[130px] shrink-0">
            <img :src=blog?.image alt="" class="object-cover">
        </div>
    </div>
</template>

<script>
import logo from '@/assets/images/logo.jpg';
import Save from '../icons/Save.vue';
import SeeLess from '../icons/SeeLess.vue';

export default {
    components: {SeeLess, Save},
    inject: ['$formatDate'],
    props: {
        blog: {
            type: Object,
        },
    },
    data() {
        return {
            logo: logo,
        };
    },
    computed: {
        blogBody() {
            return this.blog.body.slice(0, 150) + '...';
        }
    },
};
</script>