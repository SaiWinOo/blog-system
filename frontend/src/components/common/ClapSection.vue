<template>
    <div class="py-5 border-t border-b border-b-1 border-t-1 flex justify-between px-3">
        <div class="flex items-center gap-3">
            <button class="text-sm flex items-center">
                <span>
                    <Clap/>
                </span>
                <span>
                    {{ claps }}
                </span>
            </button>
            <button class="text-sm flex items-center">
                <span>
                    <Comment/>
                </span>
                <span>
                    {{ comments }}
                </span>
            </button>
        </div>
        <div class="flex items-center gap-3">
            <button class="text-sm flex items-center">
                <Save/>
            </button>
            <button class="text-sm flex items-center">
                <Audio/>
            </button>
        </div>
    </div>
</template>

<script>
import Clap from '../icons/Clap.vue';
import Audio from '../icons/Audio.vue';
import Comment from '../icons/Comment.vue';
import Save from '../icons/Save.vue';

export default {
    name: 'ClapSection',
    components: {Save, Comment, Audio, Clap},
    props: {
        comments: {
            type: Number,
            default: 0
        },
        claps: {
            type: Number,
            default: 0
        }
    },
};
</script>

<style scoped>

</style>