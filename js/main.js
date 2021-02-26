import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
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
            <app-footer/>
           
        </section>
    `,
    components: {
        appHeader,
        appFooter

    }
}

const app = new Vue(options)