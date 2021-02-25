import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';


export default {
    name:'emailApp',
    template: `
    <section class= "main-app">
      <hr class="hr">
        <section class="info-nav">
        <input class="search-input" @input="setSearch" v-model="searchInput" type="text" placeholder="Search mail" >
        </section> 

    <email-list class="scroll-container" @renderEmails="setFilter" @UnRead="markAsUnRead"  @markRead="markAsRead"  @starredToggle="toggleStar" @deleteEmail="removeEmail" v-if="!selectedEmail" :emails="emailToShow" @click="selectEmail" ></email-list>


    </section>

    `,
  data() {
    return {
      emails: null,
      selectedEmail: null,
      filterBy: null,
      searchInput:''
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
            emailService.update(email)
          }).then(()=>{
            this.loadEmails()
          })
      },
      removeEmail(emailId){
        console.log()
        emailService.remove(emailId).then(()=>{
          this.loadEmails()

        })
      },
      markAsRead(id){
        emailService.getById(id)
          .then((email)=>{
            email.isRead = true;
            emailService.update(email)
          })
      },
      markAsUnRead(id){
        console.log(id)
        emailService.getById(id)
          .then((email)=>{
            email.isRead = false;
            emailService.update(email).then(()=>{
              this.loadEmails()
            })
            
          })
      },
      setFilter(value){
          this.filterBy = value;
      },
      setSearch(){
        emailService.query()
          .then(emailReceived =>{
            const emails =  emailReceived.filter((email)=>{
                return(email.sender.toLowerCase().includes(this.searchInput.toLowerCase()))
            })
            this.emails = emails;
          }
          )},
},
  computed:{
    emailToShow() {
        if (!this.filterBy || this.filterBy ==='all') return this.emails;
        else if(this.filterBy==='inbox'){
          return this.emails.filter((email) =>{
            return email.type === 'inbox'
          } )  
        }
        else if(this.filterBy === 'sent'){
          return this.emails.filter((email) =>{
            return email.type === 'sent'
          } )  
        }
        else if(this.filterBy === 'starred'){
          return this.emails.filter((email) =>{
            return email.starred === false
          } )  

  }
}},
  components: {
    emailList,
  },
  created(){
      this.loadEmails()
  }
};
