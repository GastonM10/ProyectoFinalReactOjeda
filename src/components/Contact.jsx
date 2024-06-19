import '../css/contact.css';

const Contact = () => {

    return (
        
        <div className='pt-5 bg-dark'>
        <section className="contact-form mt-5 bg-dark d-flex justify-content-center">
            
            <div className="row d-flex justify-content-center">

                <article className="col-10 col-md-6 d-flex align-items-center">
                    <img src="../public/img/contact-form.png" className="w-75" />
                </article>

             
                <div className="grid-container-form-data col-10 col-md-6 text-center">
                    
                    <h1 className="display-4 fw-normal">Contactanos</h1>

                    <input type="name" className="form-control form-control-sm" placeholder="Nombre y Apellido" />
                    <input type="phone" className="form-control form-control-sm" placeholder="Teléfono" />
                    <input type="email" className="form-control form-control-sm" placeholder="nombre@dominio.com" />
                    
                    <textarea className="form-control form-control-sm" placeholder="Mensaje" rows="6"></textarea>
                                        
                    <div className="btn-form">
                        <button type="submit" className="btn btn-form btn-secondary">Enviar</button>
                    </div>
                
                </div>

            </div>   
        
        </section>
        </div>  

    )

}

export default Contact