export default {
    props: ['info', 'edit'],
    template: `
        <section class = "note-txt">
            <template v-if="!edit">
            <h3>{{info.title}}</h3>
            <h4>{{info.txt}}</h4>
            </template>

            <template v-else class= "note-edit-container">
            <input ref="title" class="title" type="text" v-model="info.title" @keyup.enter="saveEdit">
            <textarea name="" v-model="info.txt" cols="20" rows="10"></textarea>
            </template>
        </section>
        `,


    mounted() {
        if (this.edit) {
            this.$refs.title.focus()
        }

    }
}