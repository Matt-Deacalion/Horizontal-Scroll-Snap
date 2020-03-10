<template>
    <div id="app">
        <div class="viewport">
            <router-view />
        </div>
    </div>
</template>


<script>

export default {
    name: 'app',
}
</script>


<style lang="sass">
\:root
    --indigo: #264653
    --green: #2a9d8f
    --yellow: #e9c46a

html, #app, .viewport
    height: 100%

body
    height: 100vh
    margin: 0
    padding: 0
    background: var(--indigo)
    overflow-x: hidden
    font-family: sans-serif

.wrapper
    margin: 0 auto
    max-width: 960px
    width: 100%
    padding: 1em
    box-sizing: border-box
</style>
