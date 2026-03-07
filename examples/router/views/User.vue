<script setup>
</script>

<template>  
    <div>
        username: {{ $route.params.username }}               
        <!-- userid: {{ $route.params.userid }} -->
    </div>
</template>

<style> 
table {
    border-collapse: collapse;
}
table, td, th {
    border: 1px solid black;
}
</style>