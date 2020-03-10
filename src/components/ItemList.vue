<template>
    <div class="item-container">
        <!-- "Items" list -->
        <div v-if="items.length" class="wrapper">
            <Item v-for="item in items" :key="item.id" :item="item" />
        </div>

        <!-- "No items" message -->
        <div v-else class="wrapper no-items">
            <h1>No items</h1>
        </div>
    </div>
</template>


<script>
import Item from './Item.vue'

export default {
    name: 'ItemList',

    components: {
        Item,
    },

    props: {
        items: {
            type: Array,
            required: true
        },
    },
}
</script>


<style lang="sass" scoped>
.item-container
    position: absolute
    width: 100vw
    height: 100%
    top: 0

.no-items
    height: 100%
    display: grid
    align-items: center
    justify-content: center
</style>
