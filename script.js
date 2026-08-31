"use strict";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");
const currentYear = document.querySelector("#current-year");

function closeNavigation() {
    if (!navToggle || !navMenu) {
        return;
    }

    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        navToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        navToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeNavigation();
        }
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}