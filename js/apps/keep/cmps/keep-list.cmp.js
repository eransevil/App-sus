import keepPreview from './keep-preview.cmp.js'

export default {
    props: ['keeps'],
    template: `
    <section class = "keep-list flex justify-center flex-wrap align-center">
        <div v-for="keep in keeps" :key="keep.id" class="keep-list-container" >
            <keep-preview :keep="keep" @click.native="logId(keep.id)" />
        </div>
    </section>
    `,
    methods: {

        logId(keepId) {
            console.log('Id is', keepId);
        }
    },
    components: {
        keepPreview
    }
}