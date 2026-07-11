/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Progressive motion and interaction layer.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("motion-ready");

  // Give the opening composition a deliberate editorial rhythm.
  $(".home-hero .home-eyebrow, .home-hero h1, .home-hero .home-lead, .home-hero .home-actions, .home-hero .hero-about").each(function(index) {
    this.setAttribute("data-hero", "");
    this.style.setProperty("--hero-delay", (80 + index * 115) + "ms");
  });

  // Reveal content groups as they enter the viewport, staggered per group.
  var revealGroups = [".page__content > h2", ".focus-card", ".work-card", ".project-entry", ".project-summary-grid article", ".publication-list article", ".latest-list a", ".archive__item", ".project-flow", ".project-data-table", ".project-figure-grid", ".project-feature-figure", ".agent-architecture"];
  var revealNodes = document.querySelectorAll(revealGroups.join(","));
  Array.prototype.forEach.call(revealNodes, function(node, index) {
    node.setAttribute("data-reveal", "");
    node.style.setProperty("--reveal-delay", ((index % 4) * 65) + "ms");
  });
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: .08 });
    Array.prototype.forEach.call(revealNodes, function(node) { revealObserver.observe(node); });
  } else {
    Array.prototype.forEach.call(revealNodes, function(node) { node.classList.add("is-visible"); });
  }

  // A single gliding nav marker follows focus/hover, then returns to the current page.
  var nav = document.querySelector(".site-nav");
  if (nav) {
    var links = nav.querySelectorAll("a");
    var current = nav.querySelector('[aria-current="page"]') || links[0];
    var glider = document.createElement("span");
    glider.className = "nav-glider";
    glider.setAttribute("aria-hidden", "true");
    nav.appendChild(glider);
    nav.classList.add("is-enhanced");
    var moveGlider = function(link) {
      if (!link) return;
      glider.style.width = link.offsetWidth + "px";
      glider.style.transform = "translateX(" + link.offsetLeft + "px)";
      glider.style.opacity = "1";
    };
    Array.prototype.forEach.call(links, function(link) {
      link.addEventListener("mouseenter", function() { moveGlider(link); });
      link.addEventListener("focus", function() { moveGlider(link); });
    });
    nav.addEventListener("mouseleave", function() { moveGlider(current); });
    nav.addEventListener("focusout", function(event) { if (!nav.contains(event.relatedTarget)) moveGlider(current); });
    window.addEventListener("resize", function() { moveGlider(current); });
    moveGlider(current);
  }

  // Pointer-lit cards add depth without changing the restrained geometry.
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    $(".focus-card, .work-card, .project-summary-grid article, .project-entry").on("mousemove", function(event) {
      var rect = this.getBoundingClientRect();
      this.style.setProperty("--pointer-x", (event.clientX - rect.left) + "px");
      this.style.setProperty("--pointer-y", (event.clientY - rect.top) + "px");
    });
  }

  // Compact the header after the opening viewport and pulse the architecture core once.
  var header = document.querySelector(".site-header");
  var updateHeader = function() { if (header) header.classList.toggle("is-condensed", window.pageYOffset > 48); };
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  var architectureCore = document.querySelector(".agent-architecture__core");
  if (architectureCore && "IntersectionObserver" in window && !reduceMotion) {
    new IntersectionObserver(function(entries, observer) {
      if (entries[0].isIntersecting) { architectureCore.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: .45 }).observe(architectureCore);
  }

   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
