<template>
    <div class="container">
        <header>
            <ArrowButton @clicked="goPrevious"/>
            <h1>{{ index }}</h1>
            <ArrowButton :right="true" @clicked="goNext" />
        </header>

        <main>
            <transition :name="`slide-${this.direction}`">
                <ItemList :key="index" :items="filteredItems" />
            </transition>
        </main>
    </div>
</template>


<script>
import ArrowButton from './ArrowButton.vue'
import ItemList from './ItemList.vue'

export default {
    name: 'Items',

    components: {
        ArrowButton,
        ItemList,
    },

    data: () => ({
        direction: '',
    }),

    computed: {
        index: (vm) => vm.$store.state.index,
        items: (vm) => vm.$store.state.items,
        filteredItems: (vm) => vm.items.filter(item => item.index === vm.index),
    },

    created() {
        // create `5` random items
        this.$store.commit('loadDemoItems', 10);
    },

    mounted() {
        document.addEventListener('keyup', this.keyboard);
    },

    destroyed() {
        document.removeEventListener('keyup', this.keyboard);
    },

    methods: {
        goPrevious() {
            this.$store.commit('prev');
            this.direction = 'left';
        },

        goNext() {
            this.$store.commit('next');
            this.direction = 'right';
        },

        keyboard(e) {
            // map keyboard keys to actions
            switch (e.code) {
                case 'ArrowLeft':
                    this.goPrevious();
                    break;
                case 'ArrowRight':
                    this.goNext();
                    break;
            }
        },
    },
}
</script>


<style lang="sass" scoped>
.container
    display: flex
    flex-direction: column
    height: 100%

    header
        display: flex
        background: var(--yellow)
        justify-content: space-between
        box-sizing: border-box
        padding: 1em

        h1
            margin: 0

    main
        flex: 1
        overflow-y: scroll
        overflow-x: hidden
        position: relative

.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active,
    transition: all .2s

.slide-right-enter, .slide-left-leave-to
    transform: translate3d(100%, 0, 0)

.slide-left-enter, .slide-right-leave-to
    transform: translate3d(-100%, 0, 0)
</style>
