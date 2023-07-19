"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    // useEffect(() => {
    //     typeof document !== undefined
    //       ? require("bootstrap/dist/js/bootstrap")
    //       : null;
    //   }, []);

    const form = useRef();
    //const navigate = useNavigate();
    const router = useRouter();
    const [formStatus, setFormStatus] = useState('Send');

    const onSubmit = (e) => {
        e.preventDefault();

        setFormStatus('Submitting...');
            emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_KEY)
                .then((result) => {
                    setFormStatus('Send');
                    //router.push("/");
                }, (error) => {
                    setFormStatus('Error');
                });

            e.target.elements.name.value = '';
            e.target.elements.email.value = '';
            e.target.elements.message.value = '';
            e.target.elements.subject.value = '';


    }

    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&amp;display=swap"></link>
            </head>
            <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
                <section id="contact">
                    <div class="container">
                        <h2 class="text-uppercase text-center text-secondary mb-0">Contact Me</h2>
                        <hr />
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <form ref={form} id="contactForm" name="sentMessage" onSubmit={onSubmit}>
                                    <div class="control-group">
                                        <div class="mb-0 form-floating controls pb-2">
                                            <input class="form-control" type="text" id="name" name="name" placeholder="Name" required />
                                            <label htmlFor="name" class="form-label">Name</label>
                                            <small class="form-text text-danger help-block"></small>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="mb-0 form-floating controls pb-2">
                                            <input class="form-control" type="email" id="email" name="email" placeholder="Email Address" required />
                                            <label htmlFor="email" class="form-label">Email Address</label>
                                            <small class="form-text text-danger help-block"></small>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="mb-0 form-floating controls pb-2">
                                            <input class="form-control" type="text" id="subject" name="subject" placeholder="Subject" required />
                                            <label htmlFor="subject" class="form-label">Subject</label>
                                            <small class="form-text text-danger help-block"></small>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="mb-5 form-floating controls pb-2">
                                            <textarea class="form-control" id="message" name="message" placeholder="Message" style={{ height: "150px" }} required></textarea>
                                            <label htmlFor="message" class="form-label">Message</label>
                                            <small class="form-text text-danger help-block"></small>
                                        </div>
                                    </div>
                                    {/* <div id="success"></div> */}
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-primary flex-row btn-xl" id="sendMessageButton" type="submit">{formStatus}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>







    );
};
export default Page;