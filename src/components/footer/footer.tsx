import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

// Qwik components can be asynchronous
export const Footer = component$(() => {
    useStylesScoped$(styles);
    // Returns JSX
    return (
        <>
            <footer class="footer-area footer-eight">
                <div class="footer-widget">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="f-about">
                                    <div class="logo">
                                        <a href="javascript:void(0)">
                                            <img width="500" height="172" src="assets/images/logo.png" alt="Logo" style="width: 150px;" />
                                        </a>
                                    </div>
                                    <div class="footer-support">
                                        <span class="number"><i class="fa-solid fa-phone"></i> +1234567890</span>
                                        <span class="mail" ><i class="fa-solid fa-envelope"></i> support@loremipsum.com</span >
                                        <ul class="social">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i class="fa-brands fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i class="fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="footer-link">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#clients">Clients</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        <li><a href="#team">Team</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-5">
                                <div class="footer-link">
                                    <h6 class="footer-title">Help & Suuport</h6>
                                    <ul>
                                        <li><a href="javascript:void(0)">Support Center</a></li>
                                        <li><a href="javascript:void(0)">FAQ</a></li>
                                        <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-7">
                                <div class="footer-newsletter">
                                    <h6 class="footer-title">Subscribe Newsletter</h6>
                                    <div class="newsletter">
                                        <form action="#">
                                            <input type="text" placeholder="Your Email" />
                                            <button type="submit">
                                                <i class="lni lni-arrow-right-circle"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <p class="text">
                                        Subscribe weekly newsletter to stay upto date.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="copyright text-center">
                            <p class="text">Copyright © 2022 lynUI. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
});