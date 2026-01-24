/**
 * West Company Partners - Main JavaScript
 * Handles mobile navigation and dynamic year in footer
 */

(function() {
    'use strict';

    // DOM Elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const yearSpan = document.getElementById('year');

    /**
     * Set current year in footer
     */
    function setCurrentYear() {
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /**
     * Toggle mobile menu
     */
    function toggleMobileMenu() {
        const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
        nav.classList.toggle('is-open', !isOpen);

        // Prevent body scroll when menu is open
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    }

    /**
     * Close mobile menu
     */
    function closeMobileMenu() {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    /**
     * Handle navigation link clicks
     */
    function handleNavLinkClick() {
        // Close mobile menu on link click
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    }

    /**
     * Handle escape key to close mobile menu
     */
    function handleEscapeKey(event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            closeMobileMenu();
            mobileMenuBtn.focus();
        }
    }

    /**
     * Handle window resize
     */
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    /**
     * Initialize event listeners
     */
    function init() {
        // Set current year
        setCurrentYear();

        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }

        // Close menu on nav link click
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        // Close menu on escape key
        document.addEventListener('keydown', handleEscapeKey);

        // Handle resize
        window.addEventListener('resize', handleResize);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
