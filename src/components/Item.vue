<template>
    <div class="item">
        <h2>{{ item.code }}</h2>
    </div>
</template>


<script>
export default {
    name: 'Item',

    props: {
        item: {
            type: Object,
            required: true
        }
    },
}
</script>


<style lang="sass" scoped>
.item
    color: var(--indigo)
    background: var(--green)
    border-radius: 5px
    padding: 2em
    margin-top: 1em

    &:first-child
        margin-top: 0

    &:last-child
        margin-bottom: 1em
</style>
