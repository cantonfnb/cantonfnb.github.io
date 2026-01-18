/**
* Template Name: KnightOne - v4.7.0
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  /*
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  } */

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  const impactData = [
    { date: "May 17th, 2025", mealsShared: 91 },
    { date: "May 24th, 2025", mealsShared: 85},
    { date: "June 21st, 2025", mealsShared: 100 },
    { date: "June 28th, 2025", mealsShared: 125 },
    { date: "July 5th, 2025", mealsShared: 101 },
    { date: "July 12th, 2025", mealsShared: 110 },
    { date: "July 19th, 2025", mealsShared: 126 },
    { date: "July 26th 2025", mealsShared: 90 },
    { date: "August 23rd, 2025", mealsShared: 107 },
    { date: "August 30th, 2025", mealsShared: 125 },
    { date: "September 6th, 2025", mealsShared: 135 },
    { date: "September 13th, 2025", mealsShared: 148 },
    { date: "September 20th, 2025", mealsShared: 162 },

    { date: "September 27th, 2025", mealsShared: 85 },
    { date: "October 4th, 2025", mealsShared: 170 },
    { date: "October 11th, 2025", mealsShared: 131 },
    { date: "October 18th, 2025", mealsShared: 137 },
    { date: "October 25th, 2025", mealsShared: 182 },
    { date: "November 1st, 2025", mealsShared: 168},
    { date: "November 8th, 2025", mealsShared: 211},
    { date: "November 15th, 2025", mealsShared: 185},
    { date: "November 22th, 2025", mealsShared: 174},
    { date: "November 29th, 2025", mealsShared: 138},
    { date: "December 6th, 2025", mealsShared: 110},
    { date: "December 13th, 2025", mealsShared: 95},
    { date: "December 20th, 2025", mealsShared: 101},
    { date: "December 27th, 2025", mealsShared: 114},
    { date: "January 3rd, 2026", mealsShared: 112},
    { date: "January 10th, 2026", mealsShared: 127},
    { date: "January 17th, 2026", mealsShared: 115}
    
  ];

  function buildImpactTable() {
    const tableBody = select('.impact tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    impactData.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.date}</td>
        <td><strong>${entry.mealsShared}</strong></td>
      `;
      tableBody.appendChild(row);
    });

    calculateImpactStats();

    buildImpactChart();
  }

  function calculateImpactStats() {
    let totalMeals = 0;
    let totalServes = impactData.length;

    // Historical serves before detailed tracking (May 2021 - April 2025)
    const historicalServes = 214; // Serves before May 2025
    const totalHistoricalServes = historicalServes + totalServes;

    impactData.forEach(entry => {
      totalMeals += entry.mealsShared;
    });

    animateNumber('total-meals', totalMeals);
    animateNumber('total-serves', totalServes);
    animateNumber('total-historical-serves', totalHistoricalServes);
  }

  function animateNumber(elementId, targetNumber) {
    const element = select(`#${elementId}`);
    if (!element) return;

    const duration = 1500;
    const startTime = performance.now();
    const startNumber = 0;

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeOutQuart);

      element.textContent = currentNumber;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = targetNumber;
      }
    }

    requestAnimationFrame(updateNumber);
  }

  function buildImpactChart() {
    const canvas = select('#impactChart');
    if (!canvas) return;

    const labels = impactData.map(entry => {
      const parts = entry.date.replace(/(\d+)(st|nd|rd|th)/, '$1').split(' ');
      return `${parts[0]} ${parts[1]}`;
    });

    const data = impactData.map(entry => entry.mealsShared);

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Meals Shared',
          data: data,
          borderColor: '#009961',
          backgroundColor: 'rgba(0, 153, 97, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#009961',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              font: {
                size: 12
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 10
              },
              maxRotation: 45
            }
          }
        },
        elements: {
          point: {
            hoverBorderWidth: 3
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildImpactTable);
  } else {
    buildImpactTable();
  }

})()
















