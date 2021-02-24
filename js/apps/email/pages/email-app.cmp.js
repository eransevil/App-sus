import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
    name:'emailApp',
    template: `
    <section class= "main-app">
        <h1 class="">emails</h1>
    <email-list @starredToggle="toggleStar" v-if="!selectedEmail" :emails="EmailToShow" @click="selectEmail"></email-list>


    </section>

    `,
  data() {
    return {
      emails: emailService.query(),
      selectedEmail: null,
      filterBy: null,
    };
  },
  methods: {
    loadEmails() {
      emailService.query().then((emails) => (this.emails = emails));
    },
    selectEmail(email) {

       console.log(email)
        this.selectedEmail = email;
      },
      toggleStar(starId){
        emailService.getById(starId)
          .then((email)=>{
            email.starred = !email.starred;
            emailService.update(email )
          })
      }
  },
  computed:{
    EmailToShow() {
        if (!this.filterBy) return this.emails;

  }
},
  components: {
    emailList,
  },
  created(){
      this.loadEmails()
  }
};
