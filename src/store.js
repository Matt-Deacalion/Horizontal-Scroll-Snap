import Vue from 'vue'
import Vuex from 'vuex'
import { getRandomInt, getRandomString } from './utils.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        index: 0,

        items: [],
    },

    mutations: {
        prev: (state) => state.index -= 1,

        next: (state) => state.index += 1,

        // creates `n` items and puts them in random positions: `-1`, `0` and `1`
        loadDemoItems(state, n = 5) {
            state.items = Array(n).fill().map(
                (_, i) => ({
                    id: i + 1,
                    code: getRandomString(10),
                    index: getRandomInt(-1, 1),
                })
            );
        },
    },
});
