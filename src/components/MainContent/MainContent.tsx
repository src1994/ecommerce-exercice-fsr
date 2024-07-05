// assim se importa images from svg

import style from './MainContent.module.css'


// 1 - criar função

function MainContent() {

    //2 - Obrigatorio ter um return
    return (
        <div className= {style['main-content']}>
            <h2>Featured Products</h2>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between</p>
        </div>


    )
            
}


//3 - Exportar componente(função)
export default MainContent;