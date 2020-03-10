<template>
    <a :style="{transform: `scaleX(${axis})`}" @click.prevent="$emit('clicked')" href="/">
        <svg viewBox="0 0 492 492" xmlns="http://www.w3.org/2000/svg">
            <path d="M199 246L383 62a27 27 0 000-38L367 8c-6-5-12-8-19-8s-14 3-20 8L109 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c11-10 11-28 0-38L199 246z" />
        </svg>
    </a>
</template>


<script>
export default {
    name: 'ArrowButton',

    props: {
        right: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        axis: (vm) => vm.right ? -1 : 1,
    },
}
</script>


<style lang="sass" scoped>
svg
    height: 2em

    &:hover
        fill: var(--green)
</style>
