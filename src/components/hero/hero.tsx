import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './hero.css?inline';

// Qwik components can be asynchronous
export const Hero = component$(() => {
    useStylesScoped$(styles);
    return (
        <>
            <section id="hero" class="header-area header-one">
                <div class="header-content-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-12">
                                <div class="header-wrapper">
                                    <div class="header-content">
                                        <h1 class="header-title display-3">
                                            DARK LANDING
                                        </h1>
                                        <p class="text-lg">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas bibendum varius. Etiam vulputate elementum!
                                        </p>
                                        <div class="header-btn rounded-buttons">
                                            <a class="btn primary-btn-outline btn-lg" href="javascript:void(0)">
                                                Sign Up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="header-image d-none d-lg-block">
                                    <div class="image">
                                        <img width="1000" height="890" src="assets/images/hero-branding.avif" alt="Header" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});