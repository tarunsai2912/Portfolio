import React from 'react'
import linkedinLogo from '../../assets/linkedin_logo.png'
import gmailLogo from '../../assets/gmail_logo.png'
import fbLogo from '../../assets/facebook_logo.png'
import instaLogo from '../../assets/instagram_logo.jpg'
import copyLogo from '../../assets/copy.png'
import gitLogo from '../../assets/github_logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

function ContactBar() {

  const recipientEmail = 'tarunsairayapureddi@gmail.com';

  const handleClickEmail = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  const copyToClipboardMobile = () => {
    navigator.clipboard.writeText('8688277423').then(() => {
      toast.success('Mobile No got copied!', {
        position: 'top-right',
        autoClose: 2000
      })
    }).catch(err => {
      toast.error('Failed to copy link!', {
        position: 'top-right',
        autoClose: 2000
      });
      console.error('Failed to copy text: ', err);
    });
  };

  const copyToClipboardEmail = () => {
    navigator.clipboard.writeText('tarunsairayapureddi@gmail.com').then(() => {
      toast.success('Email Id got copied!', {
        position: 'top-right',
        autoClose: 2000
      })
    }).catch(err => {
      toast.error('Failed to copy link!', {
        position: 'top-right',
        autoClose: 2000
      });
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className='contact-container'>
      <ToastContainer />
      <h3 className='head1-contact'>Contact Me</h3>
      <div className='div1-contact'>
        <div className='d1-div1-contact' onClick={copyToClipboardMobile}>
          <h3 className='d1-mob-contact'>Mobile No: 8688277423</h3>
          <img className='d1-img-contact' src={copyLogo} alt='copy_pic' width='20vw' height='20vh'></img>
        </div>
        <div className='d1-div2-contact' onClick={copyToClipboardEmail}>
          <h3 className='d2-mob-contact'>Email Id: tarunsairayapureddi@gmail.com</h3>
          <img className='d2-img-contact' src={copyLogo} alt='copy_pic' width='20vw' height='20vh'></img>
        </div>
      </div>
      <h3 className='head2-contact'>Feel free to reach out to me either through Email or Mobile</h3>
      <div className='div2-contact'>
        <img className='d2-img1-contact' src={fbLogo} alt='fb_pic' width='30vw' height='30vh' onClick={() => window.open('https://www.facebook.com/tarunsai.rayapureddi/', '_blank')}></img>
        <img className='d2-img2-contact' src={instaLogo} alt='insta_pic' width='30vw' height='30vh' onClick={() => window.open('https://www.instagram.com/tarun_sai_rayapureddi/', '_blank')}></img>
        <img className='d2-img3-contact' src={linkedinLogo} alt='linkedin_pic' width='30vw' height='30vh' onClick={() => window.open('https://www.linkedin.com/in/tarunsai-rayapureddi-22b329215/', '_blank')}></img>
        <img className='d2-img4-contact' src={gmailLogo} alt='gmail_pic' width='30vw' height='28vh' onClick={handleClickEmail}></img>
        <img className='d2-img5-contact' src={gitLogo} alt='github_pic' width='30vw' height='33vh' onClick={() => window.open('https://github.com/tarunsai2912', '_blank')}></img>
      </div>
    </div>
  )
}

export default ContactBar
