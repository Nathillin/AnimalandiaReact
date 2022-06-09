import ModalRazas from './ModalRazas';
import './Razas.css';

function Razas(props) {
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={props.p3} className="card-img-top" alt={props.p2} />
                    <div className="card-body">
                        <h5 className="card-title">{props.p2}</h5>
                        <p className="card-text">{props.p5}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                            Ver mas
                        </button>
                        <ModalRazas
                        pm1={`id${props.p1}`}
                        pm2={props.p2}
                        pm3={props.p3}
                        pm4={props.p4}
                        pm5={props.p5}
                        pm6={props.p6}
                        pm7={props.p7}
                        pm8={props.p8}
                        pm9={props.p9}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Razas;