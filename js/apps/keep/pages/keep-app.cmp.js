import { keepService } from '../services/keep.service.js'
import keepList from '../cmps/keep-list.cmp.js'


export default {
    template: `
        <section class="keep-app main-app">
            <main>
                <keep-list :keeps="keepsToShow"/>
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
    }
}