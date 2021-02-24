import emailPreview from '../cmps/email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
    <ul class="email-list">
    <li v-for="email in emails" :key="email.id" class="email-preview-container">
    <router-link  class="open-mail" :to="'/email/'+email.id">  <email-preview @starredToggle="toggleStar"  :email="email"/>  </router-link>
          
    </li>
    </ul>
    `,
  methods: {
    toggleStar(starId){
      this.$emit ('starredToggle' , starId)
    }
  },
  components: {
    emailPreview,
  },
};
