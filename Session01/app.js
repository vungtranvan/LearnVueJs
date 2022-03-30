
const app = Vue.createApp({
    data() {
        return {
            products: ["Tao","Nho","Dua Hau","Dao"],
            image:"abc.png"
        }
    },
    methods:{
        onLogEvent(){
            console.log('running event')
        }
    }

})

app.mount("#contact")