import UserHead from './UserHeadItem/index.vue'

export const componentPlugin = {
    install(app) {
        app.component('UserHead', UserHead)
    }
}
