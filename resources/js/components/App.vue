<template>
    <div>
        <div class="container">
            <PostSection></PostSection>
        </div>
    </div>
</template>

<script>
    import PostSection from './posts/PostSection.vue';
    export default {
        name: 'App',
        components: {
            PostSection,
        }
    };
</script>