import React, { useEffect, useRef } from "react";
import './App.css'
import logo from './assets/images/logo.jpeg'
import fondo1jpg from './assets/images/fondo1jpg.jpg'
import fondo3 from './assets/images/fondo3.jpg'
import opcion1 from './assets/images/opcion1.jpg'
import ContactButtonModal from "./components/ContactButtonModal";

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function App() {
  useReveal();

  return (
    <>
      {/* ═══ HEADER ═══ */}
      <header className="header">
        <div className="logo">
          <img className="realLogo" src={logo} alt="logo Flow Line" />
        </div>
        <ContactButtonModal />
      </header>

      {/* ═══ HERO ═══ */}
      <section className="panel1Wrap reveal">
        <div className="panel1ImgWrap">
          <img className="fotoPanel1" src={opcion1} alt="textura fluida" />
          <div className="panel1Overlay" />
        </div>
        <div className="panel1box">
          <h1 className="pd heroTitle">Flow Line</h1>
          <h2 className="inter heroSub">Automatice procesos</h2>
        </div>
      </section>

      <div className="paraLinea reveal">
        <hr className="divider" />
      </div>

      {/* ═══ SOLUCIONES ═══ */}
      <section className="info reveal">
        <h3 className="pd subtitulos">Soluciones a medida para fugas de eficiencia</h3>
        <p className="inter texto1">
          Diseñamos e implementamos sistemas de automatización que optimizan la
          gestión comercial y administrativa de tu empresa. Convertimos procesos
          manuales en flujos inteligentes que aumentan productividad, reducen
          fricción operativa y mejoran la experiencia del cliente.
        </p>
      </section>

      <div className="paraLinea reveal">
        <hr className="divider" />
      </div>

      {/* ═══ ¿TE SUENA FAMILIAR? ═══ */}
      <section className="familiar">
        <div className="panel2wrap reveal">
          <h3 className="pd tefamiliar">¿Te suena familiar?</h3>
        </div>

        <div className="panel2Box reveal">
          <img className="textura2" src={fondo1jpg} alt="textura2" />

          <div className="familiar-panel">
            <div className="pain-grid">
              <article className="pain-card reveal" style={{ '--delay': '0s' }}>
                <h4 className="pd problemas">Errores Humanos</h4>
                <p className="inter">
                  Errores humanos en la carga manual de datos que afectan la
                  gestión contable y administrativa.
                </p>
              </article>

              <article className="pain-card reveal" style={{ '--delay': '0.12s' }}>
                <h4 className="pd problemas">Pérdida de Leads</h4>
                <p className="inter">
                  Pérdida de leads debido a consultas recibidas fuera del horario
                  laboral o en días en los que el negocio permanece cerrado.
                </p>
              </article>

              <article className="pain-card reveal" style={{ '--delay': '0.24s' }}>
                <h4 className="pd problemas">Ineficiencias</h4>
                <p className="inter">
                  Ineficiencias en el uso del tiempo operativo, destinado a la
                  ejecución de tareas repetitivas y de bajo valor agregado.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRANSFORMAMOS ═══ */}
      <div className="transformamos reveal">
        <p className="inter">
          Transformamos procesos comerciales y administrativos en sistemas
          automatizados, eficientes y ágiles. Diseñamos soluciones a medida que
          optimizan la gestión de leads, reducen errores en la carga de datos y
          fortalecen el control contable y operativo, mejorando la productividad,
          reduciendo costos y aportando trazabilidad y velocidad a la información
          clave del negocio.
        </p>
      </div>

      <div className="paraLinea reveal">
        <hr className="divider" />
      </div>

      {/* ═══ MODUS OPERANDI ═══ */}
      <section className="modus">
        <h3 className="pd reveal">Modus Operandi</h3>
        <div className="modus-grid">
          <div className="modus-item reveal" style={{ '--delay': '0s' }}>
            <span className="modus-num">01</span>
            <h4 className="inter letraModus">
              Análisis integral de las tareas manuales actuales para identificar,
              evaluar y automatizar los procesos con mayor impacto operativo.
            </h4>
          </div>
          <div className="modus-item reveal" style={{ '--delay': '0.12s' }}>
            <span className="modus-num">02</span>
            <h4 className="inter letraModus">
              Desarrollo, implementación y optimización de soluciones a medida,
              alineadas con las necesidades operativas específicas de cada negocio.
            </h4>
          </div>
          <div className="modus-item reveal" style={{ '--delay': '0.24s' }}>
            <span className="modus-num">03</span>
            <h4 className="inter">
              Mantenimiento constante con corrección de bugs y ajustes por cambios
              o nuevas necesidades operativas.
            </h4>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer reveal">
        <img className="footer-bg" src={fondo3} alt="" aria-hidden="true" />

        <div className="footer-inner">

          {/* TOP */}
          <div className="footer-top">
            <div className="footer-brand">
              <img className="footer-logo-img" src={logo} alt="Flow Line" />
              <p className="footer-tagline inter">Automatice procesos</p>
            </div>

            <div className="footer-cta">
              <p className="inter footer-cta-text">
                ¿Listo para eliminar las ineficiencias de su empresa? Hablemos.
              </p>
              <ContactButtonModal />
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="footer-services">
            <p className="footer-col-label inter">Servicios</p>
            <ul className="footer-services-list">
              {[
                'Gestión y seguimiento de leads',
                'Automatización de data entry',
                'Automatización de reportes',
                'Integración de sistemas',
                'Flujos de trabajo inteligentes',
                'Control contable y operativo',
              ].map((s) => (
                <li key={s}>
                  <span className="service-dot" />
                  <span className="inter">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p className="inter footer-copy">
              © 2026 Flow Line. Todos los derechos reservados. · Hecho en Argentina 🇦🇷
            </p>

            <div className="footer-socials">
              {/* Instagram */}
              <a href="https://www.instagram.com/flowline_arg/" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/5491141459797" className="social-link" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
{/*
            <div className="footer-legal">
              <a href="#" className="inter">Política de privacidad</a>
              <a href="#" className="inter">Términos de uso</a>
            </div>
            */ }
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;