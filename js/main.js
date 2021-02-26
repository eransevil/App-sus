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
<<<<<<< HEAD
           
=======
>>>>>>> 6a49a2a2f15b5b5df4b88df969364f16fbfcfd38
        </section>
    `,
    components: {
        appHeader,
        appFooter
<<<<<<< HEAD
=======

>>>>>>> 6a49a2a2f15b5b5df4b88df969364f16fbfcfd38
    }
}

const app = new Vue(options)