Vue.use(Vuex)
let signUp={
    data(){
        return{
            signUp:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        onSignUp(){
            let user = new AV.User()
            user.setUsername(this.signUp.email)
            user.setPassword(this.signUp.password)
            user.setEmail(this.signUp.email)
            user.signUp().then((user) => {
                alert('注册成功')
                let User = user.toJSON()
                this.$store.commit('saveCurrentUser',User)
                this.$router.push('/')
            },(error) => {
                console.log(error.code)
                if(error.code === 125){
                    alert('邮箱错误')
                }else if(error.code === 203){
                    alert('邮箱已被占用')
                }
            })
        }
    },
    template:`
        <div class="signUp" v-cloak>
            <form class="form" @submit.prevent="onSignUp">
                <h2>
                    注册
                </h2>
                <router-link to="/">关闭</router-link>
                <div class="row">
                    <label>
                        邮箱
                    </label>
                    <input type="text" v-model="signUp.email">
                </div>
                <div class="row">
                    <label>
                        密码
                    </label>
                    <input type="password" v-model="signUp.password">
                </div>
                <div class="actions">
                    <button type="submit">提交</button>
                </div>
                <router-link to="/login">登陆</router-link>
            </form>
        </div>

    `
}
Vue.component('sign-up',signUp)