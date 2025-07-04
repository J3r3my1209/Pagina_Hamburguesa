

const Footer = () => {
    return (
        <footer>
            <div className="footer__flex">

                <div className="footer__redes">
                    <p className="footer__title">Síguenos en redes</p>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>

                <div className="footer__enlaces">
                    <p className="footer__title">Enlaces de interés</p>
                    <ul className="footer__links">
                        <li>Saew</li>
                        <li>EPN</li>
                        <li>ESFOT</li>
                        <li>Quipux</li>
                        <li>SII</li>
                    </ul>

                </div>
                <div className="footer__contactos">
                    <p className="footer__title">Llámanos</p>
                    <i className="fa-brands fa-whatsapp"></i>
                    <p className="footer__number">+593-995644186</p>
                    <p className="footer__title">Escríbenos</p>
                    <i className="fa-regular fa-envelope"></i>
                    <p className="footer__mail">asoesfot@epn.edu.ec</p>

                </div>
            </div>
            <p className="footer__copyright">Derechos reservados</p>
        </footer>

    )
}

export default Footer