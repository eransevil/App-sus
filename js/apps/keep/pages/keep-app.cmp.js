import { keepService } from '../services/keep.service.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepAddNote from "../cmps/keep-add-note.cmp.js"
import {eventBus} from '../../../service/event-bus.service.js';


export default {
    name: "keep-app",
    template: `
        <section v-if="keeps" class="keep-app ">
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
            keepService.getById(colorObj.id)
                .then((keep) => {
                    keep.style.backgroundColor = colorObj.color
                    keepService.saveNote(keep)
                        .then(this.loadKeeps)
                })

        },
        addEmail(email){
            keepService.makeToNote(email)
            this.loadKeeps();

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
        eventBus.$on('saveNote', this.addEmail)

        this.loadKeeps();
    },
    
    components: {
        keepList,
        keepAddNote
    }
}