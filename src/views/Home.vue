<template>
    <div>
        <h1 class="title">Home</h1>
        <p>Counter: {{ $store.state.counter }}</p>
        <p>Counter: {{ $store.getters.doubleCounter }}</p>
        <button @click="$store.commit('mutateCounter')">Update</button>
    </div>
</template>

<script>
export default {}
</script>