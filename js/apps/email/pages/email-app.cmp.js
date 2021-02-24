import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
    name:'emailApp',
    template: `
    <section class= "main-app">
    <email-list v-if="!selectedEmail" :books="EmailToShow" @selected="selectEmail"></email-list>

        <h1 class="">email-app</h1>

    </section>

    `,
  data() {
    return {
      emails: emailService.query(),
      selecetMail: null,
      filterBy: null,
    };
  },
  methods: {
    loadEmails() {
      emailService.query().then((emails) => (this.emails = emails));
      
    },
  },
  components: {
    emailList,
  },
  created(){
      this.loadEmails()
  }
};
