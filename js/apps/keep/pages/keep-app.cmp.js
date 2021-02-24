import keepList from '../cmps/keep-list.cmp.js'
import noteTxt from '../cmps/note-txt.cmp.js'
import noteImg from '../cmps/note-img.cmp.js'


import { keepService } from '../services/keep.service.js'

export default {
    name: "keep-app",
    template: `
    <section v-if="keeps" class= "keep-app main-app">
        <h1 class="">keep-app</h1>
        <div v-for="(cmp, idx) in keeps.cmp">
                    <component :is="cmp.type"  :info="cmp.info"  @setVal="setAns($event, idx)"></component>
        </div>
    </section>

    `,
    data() {
        return {
            keeps: null,

            answers: [],
            // filterBy: null
        }
    },
    methods: {
        loadKeeps() {
            keepService.query()
                .then(keeps => this.keeps = keeps)
        },
        // removeKeep(keepId) {
        //     keepService.remove(keepId)
        //         .then(this.loadKeeps)
        // },
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);
            this.answers.splice(idx, 1, ans)

        },


    },

    created() {
        this.loadKeeps();
    },
    components: {
        // bookFilter,
        keepList,
        noteTxt,
        noteImg
        // bookAdd
    }
}