export default {
  template: `
   <header class="app-header flex align-center space-between">
   <router-link active-class="active-link" to="/" exact><h1> Home </h1> </router-link>
        <nav class="nav-bar">
           <router-link to="/keep">Keep</router-link> |
           <router-link to="/email">Email</router-link>
           <router-link to="/book">Book</router-link>
       </nav>
    </header>
    `,
};
