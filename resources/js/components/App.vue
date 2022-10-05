<template>
    <div>
        <AppHeader></AppHeader>
        <div class="container">
            <PostSection></PostSection>
        </div>
    </div>
</template>

<script>
import PostSection from './posts/PostSection.vue';
import AppHeader from './AppHeader.vue';
export default {
    name: 'App',
    components: {
        PostSection,
        AppHeader
    }
};
</script>