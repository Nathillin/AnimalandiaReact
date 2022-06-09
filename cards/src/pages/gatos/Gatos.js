import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { getAll } from "../../components/gatos/gatos";
import Razas from '../../components/gatos/Razas';
import './Gatos.css'

function Gatos() {
    const gatos = getAll();
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Listado de gatos</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        gatos.map(p=>(
                            <Razas 
                            p1={p.id}
                            p2={p.raza}
                            p3={p.thumbnail}
                            p4={p.imagen}
                            p5={p.descripcion}
                            p6={p.acercade}
                            p7={p.pelaje}
                            p8={p.tamaño}
                            p9={p.vida}/>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gatos;


