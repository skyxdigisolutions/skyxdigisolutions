import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './components/navBar/Navbar'
import Head from 'next/head';
import Script from 'next/script';
import twitterlogo from '../app/assets/logo-black.png'
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
 export const metadata: Metadata = {
  title: 'Sky X Digi Solution',
  description: 'Best digital marketing agency in krishnagiri | Best web development agency in krishnagiri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></Script>
      <body>
        <NavBar/>
        {children}
        <div className='p-5'>
          <div className='row'>
            <div className='col-lg-3 mt-3 text-start col-md-3 '>
              <h3>Sky X Digi Solutions</h3>
              <p className='' >No:123/1A,1st Floor,<br/>
New Housing Board 2nd Phase,<br/>
Kattiganapalli,<br/>
Krishnagiri-635001,<br/>
Tamil Nadu,<br/>
India</p>
<span><strong>Phone: </strong>+91 7845604588</span><br/>
<span><strong>Email: </strong>info@skyxdigisolutions</span>
            </div>
            <div className='col-lg-3 mt-3 text-start col-md-3 '>
            <div>
    <h4 className='text-start'>Useful Links</h4>
    <div>
      <ul>
        <Link className='text-dark' style={{textDecoration:'none'}} href='#hero'><li>Home</li></Link>
        <Link className='text-dark' style={{textDecoration:'none'}} href='#aboutUs'><li>About Us</li></Link>
        <Link className='text-dark' style={{textDecoration:'none'}} href='#services'><li>Services</li></Link>
        <Link className='text-dark' style={{textDecoration:'none'}} href='#joinUs'><li>Join Us</li></Link>
      </ul>
    </div>

    </div>
            </div>
            <div className='col-lg-3 mt-3  col-md-3 '>
              <div>

              <h4 className='text-start'>Our Services</h4>
              <div>
                <ul>
                  <li>Digital Marketing</li>
                  <li>Website Development</li>
                  <li>Billing Software</li>
                  <li>IT Hardware Support</li>
                  <li>CCTV Installation</li>
                  <li>Call Center Services</li>
                </ul>
              </div>
              </div>
            </div>
            <div className='col-lg-3 mt-3 text-start col-md-3 '>
              <h4 className='text-start'>Our Social Handles</h4>
              <div className='d-flex justify-content-around w-50 align-items-center'>
              <a href="https://twitter.com/Skyxdigi"><Image src={twitterlogo} height={16} width={16} alt='twitterlogo'/></a>
              <a href="https://www.facebook.com/profile.php?id=61551483381302"><svg viewBox="0 0 24 24" height={25} width={25} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>meta_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Brand" transform="translate(-480.000000, -48.000000)"> <g id="meta_fill" transform="translate(480.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M16.0235,4.50341 C17.8529,4.3766 19.267,5.44519 20.2076,6.67737 C21.156,7.91976 21.8094,9.54336 22.1673,11.1394 C22.5251,12.7347 22.6208,14.4504 22.3239,15.9123 C22.0388,17.3161 21.2785,18.9223 19.5568,19.437 C17.9375,19.9211 16.5179,19.2167 15.5052,18.3648 C14.4894,17.5103 13.6292,16.3122 12.953,15.1885 C12.6252,14.6438 12.3272,14.0938 12.0637,13.573 C11.8001,14.0938 11.5021,14.6438 11.1743,15.1885 C10.4981,16.3122 9.63792,17.5103 8.62209,18.3648 C7.60941,19.2167 6.18982,19.9211 4.57048,19.437 C2.84884,18.9223 2.08848,17.3161 1.80341,15.9123 C1.50655,14.4504 1.60217,12.7347 1.95995,11.1394 C2.31789,9.54336 2.97134,7.91976 3.91972,6.67737 C4.86029,5.44519 6.27437,4.3766 8.10383,4.50341 C9.81996636,4.62237364 11.0674829,5.78648603 11.8446591,6.77187041 L12.0637,7.0609 L12.0637,7.0609 L12.2827156,6.77187041 C13.059814,5.78648603 14.3073182,4.62237364 16.0235,4.50341 Z M7.89637,7.49623 C7.47584,7.46708 6.92691,7.6821 6.30436,8.49766 C5.68961,9.30301 5.17981,10.4913 4.88724,11.7959 C4.59453,13.1011 4.5524,14.3747 4.74341,15.3153 C4.90819312,16.126825 5.17222414,16.4173547 5.33536471,16.5186918 L5.40276778,16.5532373 L5.40276778,16.5532373 L5.42973,16.5627 C5.6624,16.6322 6.04382,16.6134 6.69089,16.0691 C7.33482,15.5274 7.99318,14.6564 8.60392,13.6416 C8.87629333,13.1890333 9.12860444,12.7252222 9.35564593,12.2790926 L9.61563301,11.7540754 L9.61563301,11.7540754 L9.8493616,11.25714 L9.8493616,11.25714 L10.0548321,10.7993939 L10.0548321,10.7993939 L10.2300447,10.3919447 L10.2300447,10.3919447 L10.373,10.0459 L10.373,10.0459 C10.2165,9.73315 9.99218,9.32834 9.71032,8.92724 C9.06612,8.01052 8.42073,7.53258 7.89637,7.49623 Z M16.2309,7.49623 C15.7066,7.53258 15.0612,8.01052 14.417,8.92724 C14.1351,9.32834 13.9108,9.73315 13.7543,10.0459 L13.9809584,10.588688 L13.9809584,10.588688 L14.1715556,11.0226741 C14.2058156,11.0990422 14.2412947,11.1772747 14.2779512,11.25714 L14.511686,11.7540754 L14.511686,11.7540754 L14.7716778,12.2790926 C14.9987222,12.7252222 15.2510333,13.1890333 15.5234,13.6416 C16.1341,14.6564 16.7925,15.5274 17.4364,16.0691 C18.0372786,16.5745214 18.4090587,16.6268332 18.6454171,16.576082 L18.6976,16.5627 C18.8279,16.5237 19.1811,16.3141 19.3839,15.3153 C19.5749,14.3747 19.5328,13.1011 19.2401,11.7959 C18.9475,10.4913 18.4377,9.30301 17.8229,8.49766 C17.2004,7.6821 16.6515,7.46708 16.2309,7.49623 Z" id="形状" fill="#0099FF"> </path> </g> </g> </g> </g></svg></a>
              <a href="https://www.instagram.com/skyxdigisolutions/"><svg viewBox="0 0 32 32" height={25} width={25} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg></a>
              <a href="https://www.youtube.com/@SkyXDigiSolutions"><svg viewBox="0 0 16 16" height={25} width={25} xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"></path><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"></path></g></svg></a>
              <a href="https://linkedin.com/company/skyx-digisolutions"><svg viewBox="0 0 16 16" height={25} width={25} xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg></a>
              </div>
            </div>

          </div>

        </div>
        <div style={{backgroundColor:'#0099FF'}} className='text-start m-2 p-4 text-light'>
          <small>©{new Date().getFullYear()}. | <strong>www.skyxdigisolutions.com.</strong> All Rights Reserved.</small>
        </div>
        </body>
    </html>
  )
}
