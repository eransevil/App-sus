export default {
    props: ['keep'],
    template: `
    <section class="keep-preview">
        
    <p><strong>Type: </strong> {{keep.type}}</p>
        <p> <strong>Info: </strong> {{keep.info}}</p>
    </section>
    `,
    data() {
        return {}
    },
    methods: {},

    components: {}


}