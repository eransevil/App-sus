export default {
    template: `
        <section class="note-img" >
            <div >
                <img src="{{info.url}}"  />
            </div>
            <h4>{{info.title}}</h4>
            <button type="button"  @click="reportVal">Done</button>
           
        </section>
        `,
    props: ['info'],
    data() {
        return {
            val: '',
        }
    },

    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
        }
    },
    computed: {

    }
}