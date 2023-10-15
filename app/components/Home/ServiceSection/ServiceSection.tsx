import './servicesection.css';
import Image from "next/image"
import dm from '../../../assets/social-media.png'; //digital marketing image
import wd from '../../../assets/development.png';  //web development image
import bs from '../../../assets/invoice.png'; //billing software image
import hs from '../../../assets/administrator.png';  //hardware support image
import c from '../../../assets/security-camera.png'; //security camera image
import cc from '../../../assets/live-chat.png'; //call center image

export const ServiceSection = (props:any) => {
    return (
        <div className="service-container" id='services'>
            <div className="text-center">
                <h2>Services</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={dm} height={64} width={64} alt="digital_marketing"/>
                            <div className="card-body">
                                <h5 className="card-title">Digital Marketing</h5>
                                <p className="card-text">We boost your brand&apos;s value through creative social media advertising, including PPC (pay per click) services.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={wd} height={64} width={64} alt="web_dev"/>
                            <div className="card-body">
                                <h5 className="card-title">Website Development</h5>
                                <p className="card-text">Transforming Ideas into Digital Reality. Your website is more than just an online presence; it&apos;s a powerful tool for your business&apos;s success. At Innovative Website Design, we specialize in crafting captivating and functional web experiences that not only impress visitors but also drive results.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={bs} height={64} width={64} alt="billing_software"/>
                            <div className="card-body">
                                <h5 className="card-title">Billing Software</h5>
                                <p className="card-text">We offer a user-friendly Billing Tool that simplifies your invoicing process. Customize your invoices effortlessly and gain clear Profit/Loss insights. Our auto-backup ensures you never lose an invoice, even in case of accidental deletion or system crashes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={hs} height={64} width={64} alt="hardware_support"/>
                            <div className="card-body">
                                <h5 className="card-title">IT Hardware Support</h5>
                                <p className="card-text">We meet your IT needs affordably, providing prompt support and genuine products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={c} height={64} width={64} alt="cctv_installation"/>
                            <div className="card-body">
                                <h5 className="card-title">CCTV Installation</h5>
                                <p className="card-text">Customized and Affordable CCTV Installation Services Catered to Your Unique Security Requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="cardcontainer card p-3 m-2">
                            <Image src={cc} height={64} width={64} alt="call_center"/>
                            <div className="card-body">
                                <h5 className="card-title">Call Center Services</h5>
                                <p className="card-text">Empowering Your Business with Exceptional Call Center Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
