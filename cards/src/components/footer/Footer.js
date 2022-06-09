import './Footer.css';

function Footer() {
  return (
    <div>
      <section id="info" className="overflow-hidden">
        <div className="row">
          <article className="col-12 col-md-4 cajai">
            <i className="bi bi-geo-alt infos"></i>
            <h5>Sedes</h5>
            <p className="foot">
              Sede Virrey <br />
              Sede Unicentro (24 Horas)<br />
              Sede Usaquén<br />
              Sede Rosales<br />
              Sede 106<br />
              Sede Contador (Nueva)<br />
            </p>
          </article>

          <article className="col-12 col-md-4 cajai">
            <i className="bi bi-phone infos"></i>
            <h5>Lineas de Atención</h5>
            <p className="foot">
              5455759 <br />
              5455759 <br />
              5455759 <br />
              5455759 <br />
              5455759 <br />
              5455759 <br />
            </p>
          </article>

          <article className="col-12 col-md-4 cajai">
            <i className="bi bi-envelope-open infos"></i>
            <h5>Sedes</h5>
            <p className="foot">
              info@veterinaria.com<br />
              veterinaria1@veterinaria.com<br />
              veterinaria2@veterinaria.com<br />

            </p>
          </article>

        </div>
      </section>
    </div>
  );
}

export default Footer;