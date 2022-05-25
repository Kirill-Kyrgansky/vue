import vue.js
const Counter = {
    data() {
        return {
            counter: 0
        }
    }
}

Vue.createApp(Counter).mount('#counter')
