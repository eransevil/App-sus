import keepList from '../cmps/keep-list.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    name: "keep-app",
    template: `
    <section class= "keep-app main-app">
        <h1 class="">keep-app</h1>
        <keep-list />   


    </section>

    `,
    data() {
        return {
            keeps: null
                // filterBy: null
        }
    },
    methods: {
        loadKeeps() {
            keepService.query()
                .then(keeps => this.keeps = keeps)
        },
        removeKeep(keepId) {
            keepService.remove(keepId)
                .then(this.loadKeeps)
        },


    },
    computed: {


    },
    created() {
        this.loadKeeps();
    },
    components: {
        // bookFilter,
        keepList,
        // bookAdd
    }
}