import appHeader from './cmps/app-header.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'
import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header/>
            <!-- <user-msg /> -->
            <router-view />
           
        </section>
    `,
    components: {
        appHeader,

    }
}

const app = new Vue(options)