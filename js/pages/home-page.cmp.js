import navBar from '../cmps/app-header.cmp.js';


export default {
    template: `
    <section class="home main-app">
        <div class="container-app">
        <nav-bar class="nav-bar"> </nav-bar>
        <h1 class=" header-app main-app flex justify-center align-center" > Make your life better...</h1>
        <footer class="app-footer flex justify-center align-center">
              <p> <i class="far fa-copyright"></i>  Coffeerights 2021, Created By Eran savil & Liz Hagag </p>
              </footer>
        </div>
    </section>
    `,
    components: {
        navBar,

    },
}