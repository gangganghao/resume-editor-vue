Vue.use(Vuex)
let share={
    computed:{
        shareLink(){
            return this.$store.state.shareLink
        }
    },
    template:`
        <div class="share" v-cloak>
        <div class="warpper">
            <h2>分享链接</h2>
            <textarea readonly>{{shareLink}}</textarea>
            <router-link to="/">关闭</router-link>
        </div>
    </div>
    `
}
Vue.component('share',share)