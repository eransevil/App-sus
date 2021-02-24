import emailPreview from '../cmps/email-preview.cmp.js';

export default {
  props: ['emails'],
  template: `
    <ul class="email-list">
    <li v-for="email in emails" :key="email.id" class="email-preview-container">
    <router-link class="open-mail-btn" :to="'/email/'+email.id">  <email-preview :email="email"/>  </router-link>
          
    </li>
    </ul>
    `,
  methods: {
  
  },
  components: {
    emailPreview,
  },
};
