import React from "react";

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '40px 20px 10px', background: '#fff', textAlign: 'center' , marginBottom: '0px'}}>
            <h2>Contact Me</h2>
            <p>If you'd like to connect or have any questions, feel free to reach out:</p>
            <div style={{ marginTop: '30px' }}>
                <p>
                    📞 <strong>Phone:</strong>{' '}
                    <a href="tel:+13802494435" style={{ color: '#007bff' }}>
                        +1(380)249-4435
                    </a>
                </p>
                <p>
                     📧 <strong>Email:</strong>{' '}
                     <a href="mailto:saghiriafnane1993@gmail.com" style={{color:'#007bff' }}>
                        saghiriafnane1993@gmail.com
                     </a>
                     
                </p>
                <p>
                    🔗 <strong>LinkedIn:</strong>{' '}
                    <a 
                    href="www.linkedin.com/in/afnane-saghiri-a87b57267/"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ color: '#007bff' }}>
                        Afnane-Saghiri

                    </a>
                </p>
                <p>
                    💻 <strong>GitHub:</strong>{' '}
                    <a 
                    href="https://github.com/afnanesaghiri93"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{ color: '#007bff' }}>
                        github.com/afnanesaghiri93
                     </a>
                </p>

            </div>

        </section>
    )
}
export default Contact;