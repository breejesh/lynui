import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './pricing.css?inline';

// Qwik components can be asynchronous
export const Pricing = component$(() => {
    useStylesScoped$(styles);
    // Returns JSX
    return (
        <>
            <section id="pricing" class="pricing-area pricing-thirteen">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xxl-6 col-xl-7 col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="mb-3 fw-bold">Our Pricing</h2>
                                <p class="text-lg">
                                    Morem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                                    quam suscipit distinctio optio, quaerat consequatur labore
                                    pariatur rerum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="pricing-style-thirteen text-center pricing-color-1">
                                <div class="pricing-price">
                                    <h3 class="price">$50<span>/Month</span></h3>
                                </div>
                                <div class="pricing-title">
                                    <span class="badge">20% Off</span>
                                    <h4 class="title">Basic</h4>
                                </div>
                                <div class="pricing-list">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>50 gb Space</li>
                                        <li>1 Month Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn rounded-buttons">
                                    <a
                                        class="btn primary-btn-outline"
                                        href="javascript:void(0)"
                                    >
                                        Sign Up Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="pricing-style-thirteen text-center pricing-active pricing-color-2">
                                <div class="pricing-price">
                                    <h3 class="price">$199<span>/Month</span></h3>
                                </div>
                                <div class="pricing-title">
                                    <span class="badge">Special</span>
                                    <h4 class="title">Standard</h4>
                                </div>
                                <div class="pricing-list">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>50 gb Space</li>
                                        <li>1 Month Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn rounded-buttons">
                                    <a class="btn btn-outline" href="javascript:void(0)">
                                        Sign Up Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="pricing-style-thirteen text-center pricing-color-3">
                                <div class="pricing-price">
                                    <h3 class="price">$599<span>/Month</span></h3>
                                </div>
                                <div class="pricing-title">
                                    <span class="badge">New</span>
                                    <h4 class="title">Premium</h4>
                                </div>
                                <div class="pricing-list">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>50 gb Space</li>
                                        <li>1 Month Support</li>
                                    </ul>
                                </div>
                                <div class="pricing-btn rounded-buttons">
                                    <a class="btn primary-btn-outline" href="javascript:void(0)">
                                        Sign Up Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});