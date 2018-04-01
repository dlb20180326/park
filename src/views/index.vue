<template>
    <div>
        首页<br/>
        <a @click="logout">注销</a>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => this.$router.push({ path: '/login' }));
        }
    }
};
</script>

<style scoped>

</style>