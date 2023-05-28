<template>
    <button :class="'bg-black text-white px-4 py-1 rounded-full ' + classes">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        classes: {
            type: String,
        },
    },
};
</script>

<style scoped>

</style>