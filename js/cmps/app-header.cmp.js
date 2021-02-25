export default {
  template: `
   <header class="app-header page__menu menu flex align-center space-between">
   <router-link class=" appsus-link" to="/" exact><h1> App Sus </h1> </router-link>
        <nav class="nav-bar">
           <router-link class="link keep-link" to="/keep">Keep</router-link> |
           <router-link class="link keep-link" to="/email">Email</router-link> |
           <router-link class="link keep-link" to="/book">Book</router-link>
       </nav>
    </header>
    `,
};
