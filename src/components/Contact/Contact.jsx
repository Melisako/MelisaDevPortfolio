import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_niilndo",
        "template_6z5idye",
        form.current,
        "VOBt6Akm1LhI5CZG-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
           <Row>
    <Col md={6} className="c-left">
    <h1 style={{ marginBottom: '40px' }}>Get in Touch</h1>
  
        <p style={{ fontSize: '22px' }}>Email: <a href="mailto:melisakololli@gmail.com" style={{ fontSize: '22px' }}>melisakololli@gmail.com</a></p>
        <p style={{ fontSize: '22px' }}>Phone: <a href="tel:049808029" style={{ fontSize: '22spx' }}>049808029</a></p>
    </Col>
    <Col md={6} className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            
            <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
            <span className='not-done'>{notDone && "Please, fill all the input field"}</span>
            <Button type="submit" className="button" disabled={done}>Send</Button>
            <span className='done'>{done && "Thanks for contacting me and be sure I have received your mail. If you are testing this functionality then I am confirming this thing is working perfectly fine. If you have any serious query then I will reply. Also, if you need me, you can contact me on LinkedIn."}</span>
        </form>
    </Col>
</Row>

        </Container>
    )
}

export default Contact