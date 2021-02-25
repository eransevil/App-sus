import { keepService } from '../services/keep.service.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepAddNote from "../cmps/keep-add-note.cmp.js"


export default {
    name: "keep-app",
    template: `
        <section v-if="keeps" class="keep-app main-app">
            <main>
                <keep-add-note class="add-notes"/>
                <keep-list :keeps="keepsToShow" @deleteNote="deleteNote" @changeColor="changeBgc"/>

            </main>
        </section>
`,

    data() {
        return {
            keeps: null,
            filterBy: null,
        }
    },
    methods: {
        loadKeeps() {
            keepService.query()
                .then(keeps => this.keeps = keeps)
        },
        deleteNote(keepId) {
            keepService.deleteNote(keepId)
                .then(this.loadKeeps)
        },

        changeBgc(colorObj) {
            console.log('colorObj:', colorObj)
            console.log(colorObj.id)
            keepService.getById(colorObj.id)
                .then((keep) => {
                    keep.style.backgroundColor = colorObj.color
                    console.log('neׁwkeep:', keep)
                    keepService.saveNote(keep)
                        .then(this.loadKeeps)
                })

        }

    },

    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.keeps;
            // var { byName } = this.filterBy
            // byName = byName.toLowerCase();
            // const booksToShow = this.books.filter(({ title, listPrice }) => {
            //     return (title.toLowerCase().includes(byName)) && (listPrice.amount > this.filterBy.fromPrice) && (listPrice.amount < this.filterBy.toPrice)
            // })
            // return booksToShow;
        }
    },

    created() {
        this.loadKeeps();
    },
    components: {
        keepList,
        keepAddNote
    }
}