import React from 'react';
import { ContactWrapper, All, ImgWrap, Holderform, Head, Input, Textarea,Button } from './ContactElements';
import img from '../../images/contact.png';
import { useState } from 'react';

const Contact = () => {
  
const [mes,setmes]=useState('Send');


    return (
        <ContactWrapper id='contact'>
            <Head>
                LET'S CONNECT
            </Head>
            <All>
                <Holderform  >
                    <h1 style={{ marginBottom: '20px' }}>
                        Get in touch
                    </h1>

                    <form action="https://formsubmit.co/b47a82a5dd2fdb1687d2d02fe9ae2ad5"  method="POST">
                        <label htmlFor='fname'   >First Name*</label>
                        <Input type="text" id="fname" name="firstname" placeholder="Your name" required />

                        <label htmlFor='lname'>Last Name*</label>
                        <Input type="text" id="lname" name="lastname" placeholder="Your last name" required />
                        <label htmlFor='email'  >Email*</label>
                        <Input type="email" id="email" name="email" placeholder="Your Email"   required/>

                        <label htmlFor='subect'  required >Message*</label>
                        <Textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></Textarea>

                        <Button type="submit"  style={{ maxWidth: '150px' }}  onClick={()=> setmes('Sending...')}  >{mes}</Button>
                    </form>

                </Holderform>
                <ImgWrap>
                    <img style={{ maxWidth: '350px' }}  alt='contact' src={img} />
                </ImgWrap>
            </All>


        </ContactWrapper>
    )
}

export default Contact;