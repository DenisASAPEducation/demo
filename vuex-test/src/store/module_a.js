const module_a = {
    namespaced: true,

    state: {
        firstName: '',
        lastName: ''
    },
    getters: {
        fullName(state) {
            return state.firstName + ' ' + state.lastName
        }
    },
    mutations: {
        changeFirstName(state, value) {
            state.firstName = value
        },
        changeLastName(state, value) {
            state.lastName = value
        }
    },
    actions: {
    },
}

export default module_a