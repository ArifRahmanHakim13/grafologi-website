/* =========================================================
   GRAFOLOGI INDONESIA — COMPREHENSIVE COURSE
   Interactions:
   - Sticky Header
   - Mobile Navigation
   - Scroll Reveal
   - Accordion Modul
   - FAQ Accordion
   - Testimonial Carousel
   - Mint Slider
   - Profile Slider
   - Back To Top
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       Sticky Header
    ========================================== */

    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {

        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 12);
        }

        if (backToTop) {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        }

    }

    window.addEventListener('scroll', onScroll, {
        passive: true
    });

    onScroll();

    if (backToTop) {

        backToTop.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });

    }

    /* ==========================================
       Mobile Navigation
    ========================================== */

    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {

        navToggle.addEventListener('click', () => {

            const isOpen = mainNav.classList.toggle('open');

            navToggle.classList.toggle('active', isOpen);

            navToggle.setAttribute('aria-expanded', isOpen);

        });

        mainNav.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', () => {

                mainNav.classList.remove('open');

                navToggle.classList.remove('active');

                navToggle.setAttribute('aria-expanded', 'false');

            });

        });

    }

    /* ==========================================
       Scroll Reveal
    ========================================== */

    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('in-view');

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'

        });

        revealElements.forEach(el => observer.observe(el));

    } else {

        revealElements.forEach(el => el.classList.add('in-view'));

    }

    /* ==========================================
       Accordion Modul
    ========================================== */

    document.querySelectorAll('.module-toggle').forEach(button => {

        button.addEventListener('click', function () {

            const module = this.closest('.module');

            const isOpen = module.classList.contains('is-open');

            document.querySelectorAll('.module').forEach(item => {

                item.classList.remove('is-open');

                const btn = item.querySelector('.module-toggle');

                if (btn) {

                    btn.setAttribute('aria-expanded', 'false');

                    const span = btn.querySelector('span');

                    if (span) span.textContent = "+";

                }

            });

            if (!isOpen) {

                module.classList.add('is-open');

                this.setAttribute('aria-expanded', 'true');

                const span = this.querySelector('span');

                if (span) span.textContent = "−";

            }

        });

    });

    /* ==========================================
       FAQ Accordion
    ========================================== */

    document.querySelectorAll('.faq-question').forEach(button => {

        button.addEventListener('click', function () {

            const item = this.closest('.faq-item');

            const isOpen = item.classList.contains('is-open');

            document.querySelectorAll('.faq-item').forEach(faq => {

                faq.classList.remove('is-open');

                const btn = faq.querySelector('.faq-question');

                if (btn) {

                    btn.setAttribute('aria-expanded', 'false');

                }

            });

            if (!isOpen) {

                item.classList.add('is-open');

                this.setAttribute('aria-expanded', 'true');

            }

        });

    });

    /* ==========================================
       Testimonial Carousel
    ========================================== */

    const track = document.getElementById('testTrack');
    const prevBtn = document.getElementById('testPrev');
    const nextBtn = document.getElementById('testNext');

    if (track && prevBtn && nextBtn) {

        function getScrollAmount() {

            const card = track.querySelector('.testi-card');

            return card ? card.offsetWidth + 20 : 320;

        }

        prevBtn.addEventListener('click', () => {

            track.scrollBy({

                left: -getScrollAmount(),

                behavior: 'smooth'

            });

        });

        nextBtn.addEventListener('click', () => {

            track.scrollBy({

                left: getScrollAmount(),

                behavior: 'smooth'

            });

        });

    }

    /* ==========================================
       Mint Slider
    ========================================== */

    const mintSlider = document.getElementById("mintSlider");
    const mintPrev = document.getElementById("mintPrev");
    const mintNext = document.getElementById("mintNext");

    if (mintSlider && mintPrev && mintNext) {

        function getMintScroll() {

            const card = mintSlider.querySelector(".mint-card");

            return card ? card.offsetWidth + 24 : 380;

        }

        mintNext.addEventListener("click", () => {

            mintSlider.scrollBy({

                left: getMintScroll(),

                behavior: "smooth"

            });

        });

        mintPrev.addEventListener("click", () => {

            mintSlider.scrollBy({

                left: -getMintScroll(),

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       Profile Slider
    ========================================== */

    const profileSlider = document.getElementById("profileSlider");
    const profilePrev = document.getElementById("profilePrev");
    const profileNext = document.getElementById("profileNext");

    if (profileSlider && profilePrev && profileNext) {

        function getProfileScroll() {

            const card = profileSlider.querySelector(".profile-card");

            return card ? card.offsetWidth + 24 : 360;

        }

        profileNext.addEventListener("click", () => {

            profileSlider.scrollBy({

                left: getProfileScroll(),

                behavior: "smooth"

            });

        });

        profilePrev.addEventListener("click", () => {

            profileSlider.scrollBy({

                left: -getProfileScroll(),

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const targetID = this.getAttribute('href');

            if (targetID.length <= 1) return;

            const target = document.querySelector(targetID);

            if (!target) return;

            e.preventDefault();

            const offset = 90;

            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({

                top,

                behavior: 'smooth'

            });

        });

    });

});