import styles from '../../../styles/components/contactsection.module.css'
export const ContactSection=(props:any)=>{
    return <>
    <div id='contactUs' className={styles.contactsectioncontainer}>
        <div className="row p-5 w-100">
            <div className="text-center">
                <h3 className='text-light'>Contact Us!</h3>
            </div>
            <div  className="col-lg-7 col-md-4 col-sm-12">
            <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.7269852037202!2d78.2002169447519!3d12.523080661564752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac35a6dc074d97%3A0xa7765b176b3e6aba!2sSkyX%20Digi%20Solutions!5e0!3m2!1sen!2sin!4v1696307209513!5m2!1sen!2sin" width="600" height="450" style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-lg-5 mt-3 col-md-4 col-sm-12  text-light d-flex flex-column justify-content-space-between align-items-start">
                <div className='m-0 m-auto'>
                <div className='d-flex  align-items-center'>
                <div className='bg-light rounded-circle p-1 me-4'>
                <svg viewBox="0 0 24 24" height={30} width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#0099FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                </div>
                <div>
                <h3>Location:</h3>
                <p>No. 123/1A,1st Floor, New Housing Board 2nd Phase, Kattiganapalli, Krishnagiri-635001, Tamil Nadu, India.</p>
                </div>
                </div>
                <div className='d-flex  align-items-center'>
                <div className='bg-light rounded-circle p-1 me-4'>
                <svg viewBox="0 0 24 24" height={30} width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#0099FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div>
                <h3>Email:</h3>
                <p>info@skyxdigisolutions.com</p>
                </div>
                </div>
                <div className='d-flex  align-items-center'>
                <div className='bg-light rounded-circle p-1 me-4'>
                <svg viewBox="0 0 24 24" height={30} width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#0099FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div>
                <h3>Call:</h3>
                <p>+91 7845604588</p>
                </div>
                </div>

                </div>
            </div>

        </div>
    </div>
    </>
}