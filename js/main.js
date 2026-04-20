/* ============================================================
   Qwen3.6 特設サイト 共通JS
   - テーマ切替 (light / dark)
   - ドロワーナビ
   - トップに戻るボタン
   - ベンチマークバーのアニメ
   ============================================================ */

(function () {
  "use strict";

  // ---------- Theme ----------
  const THEME_KEY = "qwen36-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え");
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    applyTheme(theme);
  }

  function toggleTheme() {
    const cur = root.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }

  // ---------- Drawer ----------
  function openDrawer() {
    document.getElementById("navDrawer")?.classList.add("open");
    document.getElementById("navBackdrop")?.classList.add("open");
    document.body.classList.add("no-scroll");
  }
  function closeDrawer() {
    document.getElementById("navDrawer")?.classList.remove("open");
    document.getElementById("navBackdrop")?.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  // ---------- Back to Top ----------
  function initBackToTop() {
    const btn = document.getElementById("toTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) btn.classList.add("visible");
      else btn.classList.remove("visible");
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- Bench bars animate on view ----------
  function initBenchBars() {
    const bars = document.querySelectorAll(".bench-fill[data-width]");
    if (!("IntersectionObserver" in window) || bars.length === 0) {
      bars.forEach(b => b.style.width = b.dataset.width);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.width;
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => { b.style.width = "0%"; io.observe(b); });
  }

  // ---------- Mark active nav link ----------
  function markActiveNav() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-list a").forEach(a => {
      const href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
    document.getElementById("navOpen")?.addEventListener("click", openDrawer);
    document.getElementById("navClose")?.addEventListener("click", closeDrawer);
    document.getElementById("navBackdrop")?.addEventListener("click", closeDrawer);
    initBackToTop();
    initBenchBars();
    markActiveNav();
  });
})();
