import './Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import imagem1 from './blog/blog-img-1.jpg';
import imagem2 from './blog/blog-img-2.jpg';
import imagem3 from './blog/blog-img-3.jpg';
import imagem4 from './blog/blog-img-4.jpg';
import imagem5 from './blog/blog-img-5.jpg';
import imagem6 from './blog/blog-img-6.jpg';
import './animate.min.css'
import './bootstrap.min.css'
import './font-awesome.min.css'
import './main.css'
import './owl.carousel.css'
import './responsive.css'
import './showrecipe.js'

// import './jquery.sticky.js'
// import './main.js'
// import './plugins.js'
// import './wow.min.js'


function Home() {

    const navigate = useNavigate();

    // Função para redirecionar ao clicar no card
    const handleCardClick = (rota) => {
        navigate(rota);
    };

    return (
        <div className="container">
        <section id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <h1 class="heading">Todas <span>as</span> nossas <span>receitas</span></h1>
                        <ul>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view1" onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                   <img src={imagem1} alt="" srcset="" />
                                </div>
                                <div class="content-right">
                                    <h3>Torta de Frango</h3>
                                    <p>Uma torta recheada com frango desfiado e temperos especiais, perfeita para...</p>
                                </div>
                            </li>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view2" onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                    <img src={imagem2} alt="blog-img"/>
                                </div>
                                <div class="content-right">
                                    <h3>Waffles com Morango</h3>
                                    <p>Waffles crocantes cobertos com morangos frescos e um toque de chantilly, ideais para ...</p>
                                </div>
                            </li>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view3" onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                <img src={imagem3} alt="blog-img"/>
                                </div>
                                <div class="content-right">
                                    <h3>Bife Acebolado</h3>
                                    <p>Suculentos bifes grelhados com cebolas caramelizadas...</p>
                                </div>
                            </li>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view4" onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                    <img src={imagem4} alt="blog-img"/>
                                </div>
                                <div class="content-right">
                                    <h3>Espetinho</h3>
                                    <p>Deliciosos espetinhos de carne e vegetais, ótimos para um...</p>
                                </div>
                            </li>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view5"onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                    <img src={imagem5} alt="blog-img"/> 
                                </div>
                                <div class="content-right">
                                    <h3>Panqueca de Framboesa</h3>
                                    <p>Panquecas macias servidas com uma calda de framboesa fresca...</p>
                                </div>
                            </li>
                            <li class="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view6"onClick={() => handleCardClick('/receitas')}>
                                <div class="blog-img">
                                    <img src={imagem6} alt="blog-img"/>
                                </div>
                                <div class="content-right">
                                    <h3>Salada</h3>
                                    <p>Uma salada colorida e nutritiva, feita com ingredientes frescos e perfeita...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default Home;


// import React, { useEffect } from 'react';
// import './Home.css';
// import { Link } from 'react-router-dom';
// import imagem1 from './blog/blog-img-1.jpg';
// import imagem2 from './blog/blog-img-2.jpg';
// import imagem3 from './blog/blog-img-3.jpg';
// import imagem4 from './blog/blog-img-4.jpg';
// import imagem5 from './blog/blog-img-5.jpg';
// import imagem6 from './blog/blog-img-6.jpg';
// import './animate.min.css';
// import './bootstrap.min.css';
// import './font-awesome.min.css';
// import './main.css';
// import './owl.carousel.css';
// import './responsive.css';

// function Home() {
//   useEffect(() => {
//     // Carregar jQuery
//     const loadJQuery = new Promise((resolve) => {
//       if (!window.jQuery) {
//         const jqueryScript = document.createElement('script');
//         jqueryScript.src = "https://code.jquery.com/jquery-1.10.2.min.js";
//         jqueryScript.async = true;
//         jqueryScript.onload = () => resolve(window.jQuery);
//         document.body.appendChild(jqueryScript);
//       } else {
//         resolve(window.jQuery);
//       }
//     });

//     // Após carregar o jQuery, carregar os plugins dependentes
//     loadJQuery.then(() => {
//       const stickyScript = document.createElement('script');
//       stickyScript.src = "./jquery.sticky.js";
//       stickyScript.async = true;
//       document.body.appendChild(stickyScript);

//       const wowScript = document.createElement('script');
//       wowScript.src = "./wow.min.js";
//       wowScript.async = true;
//       document.body.appendChild(wowScript);

//       const mainScript = document.createElement('script');
//       mainScript.src = "./main.js";
//       mainScript.async = true;
//       document.body.appendChild(mainScript);
//     });
//   }, []);

//   return (
//     <div className="container">
//       <section id="blog">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="block">
//                 <h1 className="heading">
//                   Todas <span>as</span> nossas <Link to="/produtos">receitas</Link>
//                 </h1>
//                 <ul>
//                   <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms" id="card-view1">
//                     <div className="blog-img">
//                       <img src={imagem1} alt="Torta de Frango" />
//                     </div>
//                     <div className="content-right">
//                       <h3>Torta De Frango</h3>
//                       <p>Prepared in true New England fashion. Tender all-white meat chicken simmered...</p>
//                     </div>
//                   </li>
//                   {/* Restante do código... */}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
