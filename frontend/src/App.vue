<template>
    <div>
        <Navbar />
        <RouterView />
    </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue';

export default {
    components: { Navbar },
};
</script>

<style lang="scss" scoped></style>