(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* —— Mobile menu drawer (Buzzoid overlay + legacy phone-menu) —— */
  const overlay = document.querySelector("[data-menu-overlay]");
  const burger = document.querySelector("[data-burger]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const phoneMenu = document.getElementById("phone-nav");
  const scrim = document.querySelector("[data-scrim]");
  const useOverlay = Boolean(overlay);

  const openMenu = () => {
    if (!burger) return;
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (useOverlay) {
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      return;
    }
    if (phoneMenu) {
      phoneMenu.hidden = false;
      phoneMenu.classList.add("open");
    }
    if (scrim) scrim.classList.add("open");
  };

  const closeMenu = () => {
    if (!burger) return;
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (useOverlay) {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      return;
    }
    if (phoneMenu) {
      phoneMenu.hidden = true;
      phoneMenu.classList.remove("open");
    }
    if (scrim) scrim.classList.remove("open");
  };

  if (burger) burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    if (open) closeMenu();
    else openMenu();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeMenu();
    });
  }
  if (scrim) scrim.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* —— Desktop Tools dropdown —— */
  const servicesTrigger = document.querySelector("[data-services-trigger]");
  const servicesMenu = document.getElementById("services-menu");
  if (servicesTrigger && servicesMenu) {
    servicesTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      const open = servicesTrigger.getAttribute("aria-expanded") === "true";
      servicesTrigger.setAttribute("aria-expanded", String(!open));
      if (open) {
        servicesMenu.hidden = true;
        servicesMenu.classList.remove("is-open");
      } else {
        servicesMenu.hidden = false;
        servicesMenu.classList.add("is-open");
      }
    });
    document.addEventListener("click", (e) => {
      if (!servicesTrigger.contains(e.target) && !servicesMenu.contains(e.target)) {
        servicesTrigger.setAttribute("aria-expanded", "false");
        servicesMenu.hidden = true;
        servicesMenu.classList.remove("is-open");
      }
    });
  }

  /* —— Hero services tabs (Buzzoid curve tabs) —— */
  const tabButtons = Array.from(document.querySelectorAll(".bz-tab[data-tab]"));
  const panels = Array.from(document.querySelectorAll(".bz-service-grid[data-panel]"));

  const curveForIndex = (i, len) => {
    if (i === 0) return "curve-right";
    if (i === len - 1) return "curve-left";
    return "curve-both";
  };

  tabButtons.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-tab");
      tabButtons.forEach((t, i) => {
        const on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", String(on));
        t.classList.remove("curve-right", "curve-left", "curve-both");
        if (on) t.classList.add(curveForIndex(i, tabButtons.length));
      });
      panels.forEach((p) => {
        const on = p.getAttribute("data-panel") === id;
        p.classList.toggle("is-active", on);
        p.hidden = !on;
      });
    });
  });

  /* —— Stack card disclosures (Buzzoid-style) —— */
  document.querySelectorAll(".stack-card").forEach((card) => {
    card.querySelectorAll(".stack-disc").forEach((disc) => {
      const btn = disc.querySelector(".stack-disc-btn");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const wasOpen = disc.classList.contains("open");
        card.querySelectorAll(".stack-disc").forEach((d) => {
          d.classList.remove("open");
          const b = d.querySelector(".stack-disc-btn");
          const t = d.querySelector(".stack-disc-toggle");
          if (b) b.setAttribute("aria-expanded", "false");
          if (t) t.textContent = "+";
        });
        if (!wasOpen) {
          disc.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          const t = disc.querySelector(".stack-disc-toggle");
          if (t) t.textContent = "−";
        }
      });
    });
  });

  /* —— FAQ accordion (legacy + buy-faq split) —— */
  document.querySelectorAll("[data-faq] .bz-faq-item, [data-faq] .buy-faq-item").forEach((item) => {
    const btn = item.querySelector("button");
    if (!btn) return;
    const list = item.closest("[data-faq]");
    btn.addEventListener("click", () => {
      const open = item.classList.contains("open");
      list.querySelectorAll(".bz-faq-item, .buy-faq-item").forEach((el) => {
        el.classList.remove("open");
        const b = el.querySelector("button");
        const t = el.querySelector(".bz-faq-toggle, .buy-faq-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
        if (t) t.textContent = "+";
      });
      if (!open) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        const t = item.querySelector(".bz-faq-toggle, .buy-faq-toggle");
        if (t) t.textContent = "−";
      }
    });
  });

  /* —— Guarantees sticky scroll steps —— */
  const guarTrack = document.querySelector("[data-guar-track]");
  const guarCard = document.querySelector("[data-guar-card]");
  const guarSteps = Array.from(document.querySelectorAll("[data-guar-step]"));
  const guarPanels = Array.from(document.querySelectorAll(".guar-panel[data-panel]"));
  let guarIndex = 0;

  const setGuar = (index) => {
    if (!guarCard) return;
    const next = Math.max(0, Math.min(2, index));
    if (next === guarIndex && guarCard.getAttribute("data-active") === String(next)) return;
    guarIndex = next;
    guarCard.setAttribute("data-active", String(guarIndex));
    guarSteps.forEach((step, i) => {
      const on = i === guarIndex;
      step.classList.toggle("is-active", on);
      step.setAttribute("aria-selected", String(on));
    });
    guarPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.getAttribute("data-panel") === String(guarIndex));
    });
  };

  if (guarTrack && guarCard && guarSteps.length) {
    const syncGuarFromScroll = () => {
      if (window.innerWidth < 901 || reduceMotion) return;
      const rect = guarTrack.getBoundingClientRect();
      const trackH = guarTrack.offsetHeight;
      const viewH = window.innerHeight;
      const scrolled = -rect.top;
      const range = Math.max(1, trackH - viewH);
      const progress = Math.min(1, Math.max(0, scrolled / range));
      const next = Math.min(2, Math.floor(progress * 3));
      if (next !== guarIndex) setGuar(next);
    };

    window.addEventListener("scroll", syncGuarFromScroll, { passive: true });
    window.addEventListener("resize", syncGuarFromScroll);
    syncGuarFromScroll();

    guarSteps.forEach((step) => {
      step.addEventListener("click", () => {
        const i = Number(step.getAttribute("data-guar-step"));
        setGuar(i);
        if (window.innerWidth < 901 || reduceMotion) return;
        const rect = guarTrack.getBoundingClientRect();
        const trackTop = window.scrollY + rect.top;
        const range = Math.max(1, guarTrack.offsetHeight - window.innerHeight);
        const targetY = trackTop + (i / 3) * range + 8;
        window.scrollTo({ top: targetY, behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  /* —— Get Started scroll progress —— */
  const gsSection = document.querySelector("[data-gs]");
  const gsTrack = gsSection?.querySelector(".gs-track");
  const gsPin = gsSection?.querySelector(".gs-pin");

  const clamp01 = (n) => Math.min(1, Math.max(0, n));
  const rangeMap = (p, a, b) => clamp01((p - a) / (b - a));

  const syncGetStarted = () => {
    if (!gsSection || !gsTrack || !gsPin) return;
    if (window.innerWidth < 901 || reduceMotion) {
      gsPin.style.setProperty("--gs-title", "1");
      gsPin.style.setProperty("--gs-face", "1");
      gsPin.style.setProperty("--gs-copy", "1");
      gsPin.style.setProperty("--gs-reveal", "1");
      gsPin.style.setProperty("--gs-picker", "1");
      return;
    }
    const rect = gsTrack.getBoundingClientRect();
    const viewH = window.innerHeight;
    /* Begin as the section enters view (not only after a long sticky scroll) */
    const lead = viewH * 0.35;
    const range = Math.max(1, gsTrack.offsetHeight - viewH + lead);
    const progress = clamp01((lead - rect.top) / range);

    const title = rangeMap(progress, 0, 0.2);
    const face = rangeMap(progress, 0.06, 0.26);
    const copy = rangeMap(progress, 0.14, 0.34);
    const reveal = rangeMap(progress, 0.24, 0.5);
    const picker = rangeMap(progress, 0.38, 0.72);

    gsPin.style.setProperty("--gs-title", title.toFixed(4));
    gsPin.style.setProperty("--gs-face", face.toFixed(4));
    gsPin.style.setProperty("--gs-copy", copy.toFixed(4));
    gsPin.style.setProperty("--gs-reveal", reveal.toFixed(4));
    gsPin.style.setProperty("--gs-picker", picker.toFixed(4));
  };

  if (gsSection) {
    window.addEventListener("scroll", syncGetStarted, { passive: true });
    window.addEventListener("resize", syncGetStarted);
    syncGetStarted();
  }

  /* —— Smooth scroll —— */
  document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      const href = el.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeMenu();
  });
})();
