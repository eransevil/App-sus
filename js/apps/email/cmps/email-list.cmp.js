import emailPreview from '../cmps/email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
    <ul class="email-list">
    <li v-for="email in emails" :key="email.id" class="email-preview-container">
               <email-preview :email="email"/>
               <!-- <router-link class="open-preview-btn" :to="'/book/'+book.id"> Details</router-link> -->
    </li>
    </ul>
    `,
  methods: {
    select(book) {
      this.$emit('selected', book);
    },
  },
  components: {
    emailPreview,
  },
};
