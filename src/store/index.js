import {createStore} from "vuex";
import axios from "axios";

import.meta.env

const store = createStore({
    state() {
        return {
            query: '',
            photos: [],
            page: 1,
            total_results: 0,
            per_page: 20,
        }
    },
    mutations: {
        updateQuery(state, query) {
            state.query = query;
        },
        addPhotos(state, data) {
            state.total_results = data.total_results;
            state.page = data.page;
            state.photos = data.photos;
        },
        changePage(state, page) {
            state.page = page;
        }
    },
    getters: {
        hasImage(state) {
            return state.query !== '';
        },
        imageResult(state) {
            let photo_range_low = (state.page - 1) * state.per_page
            let photo_range_high = state.page * state.per_page
            return `found  ${state.total_results} photos, ${photo_range_low} - ${photo_range_high} / ${state.total_results}`
        }
    },
    actions: {
        search({commit, state}) {
            state.photos = [];
            axios({
                url: `https://api.pexels.com/v1/search?query=${state.query}&per_page=${state.per_page}&page=${state.page}`,
                headers: {
                    'Authorization': '<your-api-key>',
                }
            }).then((data) => {
                commit('addPhotos', data.data);
            })
        }
    }
});


export default store;