const module_b = {
    state: {
        firstName: '',
        lastName: ''
    },
    getters: {
        firstName(state) {
            return state.firstName
        },
        lastName(state) {
            return state.lastName
        },
        fullName(state) {
            return state.firstName + ' ' + state.lastName
        }
    },
    mutations: {
        changeFirstName(state, value) {
            console.log(value)
            state.firstName = value
        },
        changeLastName(state, value) {
            state.lastName = value
        }
    },
    actions: {
        changeFirstName({commit}, value) {
            commit('changeFirstName', value)
            commit('module_a/changeFirstName', value, {root: true})
        }
    },
}

export default module_b