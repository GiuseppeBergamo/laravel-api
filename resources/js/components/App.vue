<template>
    <div>
        <AppHeader></AppHeader>
        <div class="container">
            <HomePage></HomePage>
            <ContactsPage></ContactsPage>
            <AboutPage></AboutPage>
        </div>
    </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import AppHeader from './AppHeader.vue';
import ContactsPage from './pages/ContactsPage.vue';
import AboutPage from './pages/AboutPage.vue';
export default {
    name: 'App',
    components: {
    AppHeader,
    HomePage,
    ContactsPage,
    AboutPage
}
};
</script>