export default {
    template: `
        <section>
            {{info.txt}}
            <label v-for="text in info.txt" >
                <input type="txt"  @change="reportVal" v-model="val">
                <span>{{text}}</span>
                &nbsp;&nbsp;
            </label>
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
    }
}