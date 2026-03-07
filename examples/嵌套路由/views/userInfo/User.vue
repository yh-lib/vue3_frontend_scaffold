<script>
import { RouterView,useRoute } from 'vue-router';
</script>

<template>
    <div>
        <p> {{$route.params.id}} </p>
    </div>
    <main>
        <RouterView />
    </main>
</template>