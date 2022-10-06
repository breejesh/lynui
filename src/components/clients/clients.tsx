import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './clients.css?inline';

// Qwik components can be asynchronous
export const Clients = component$(() => {
    useStylesScoped$(styles);
    // Returns JSX
    return (
        <>
            <section id="clients" class="client-logo-area client-logo-three">
                <div class="section-title-four">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <h2 class="fw-bold">Our Awesome Clients</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="single-client text-center">
                                <img width="200" height="55" src="assets/images/client-logo-1.avif" alt="Client Logo" />
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client text-center">
                                <img width="200" height="55" src="assets/images/client-logo-2.avif" alt="Client Logo" />
                            </div>

                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client text-center">
                                <img width="200" height="55" src="assets/images/client-logo-3.avif" alt="Client Logo" />
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client text-center">
                                <img width="200" height="55" src="assets/images/client-logo-4.avif" alt="Client Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});