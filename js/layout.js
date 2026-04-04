(function () {
	var HEADER_HTML = `
		<!-- HEADER
		============================================= -->
		<header id="header" class="header">

			<!-- MOBILE HEADER -->
		    <div class="wsmobileheader clearfix">
		    	<a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
		    	<span class="smllogo"><img src="images/logo.png" width="180" height="40" alt="Cytotec Colombia"/></span>
		    	<a href="tel:+573245040176" class="callusbtn"><i class="fas fa-phone"></i></a>
		 	</div>

		 	<!-- HEADER STRIP -->
		 	<div class="headtoppart bg-blue clearfix">
		    	<div class="headerwp clearfix">

		    		<!-- Contact Info -->
		     		<div class="headertopleft">
		        		<div class="address clearfix">
		        			<span><i class="fas fa-map-marker-alt"></i> Bogotá, Colombia</span>
		        			<a href="tel:+573245040176" class="callusbtn"><i class="fas fa-phone"></i> +57 324 504 0176</a>
		        		</div>
		     		</div>

		     		<!-- WhatsApp Link -->
				    <div class="headertopright">
				    	<a class="facebookicon" title="WhatsApp" href="https://wa.me/+573245040176" target="_blank" rel="noopener noreferrer">
				    		<i class="fab fa-whatsapp"></i> <span class="mobiletext02">WhatsApp</span>
				    	</a>
				    	<a class="googleicon" title="Email" href="mailto:info@cytotecbogota.com.co">
				    		<i class="fas fa-envelope"></i> <span class="mobiletext02">Email</span>
				    	</a>
			      	</div>

			    </div>
		  	</div>	<!-- END HEADER STRIP -->


		  	<!-- NAVIGATION MENU -->
		  	<div class="wsmainfull menu clearfix">
    			<div class="wsmainwp clearfix">

    				<!-- LOGO IMAGE -->
    				<div class="desktoplogo"><a href="index.html"><img src="images/logo.png" width="180" height="40" alt="Cytotec Colombia"></a></div>

    				<!-- MAIN MENU -->
      				<nav class="wsmenu clearfix">
        				<ul class="wsmenu-list">

        					<!-- INICIO -->
						    <li class="nl-simple" aria-haspopup="true"><a href="index.html">Inicio</a></li>

						    <!-- NOSOTROS -->
						    <li class="nl-simple" aria-haspopup="true"><a href="nosotros.html">Nosotros</a></li>

						    <!-- FAQS -->
						    <li class="nl-simple" aria-haspopup="true"><a href="faqs.html">FAQs</a></li>

						    <!-- CONTACTO -->
						    <li class="nl-simple" aria-haspopup="true"><a href="contacto.html">Contacto</a></li>

						    <!-- CTA BUTTON -->
						    <li class="nl-simple header-btn" aria-haspopup="true">
						    	<a href="https://wa.me/+573245040176" target="_blank" rel="noopener noreferrer">WhatsApp</a>
						    </li>

        				</ul>
        			</nav>	<!-- END MAIN MENU -->

    			</div>
    		</div>	<!-- END NAVIGATION MENU -->


		</header>	<!-- END HEADER -->
	`;

	var FOOTER_HTML = `
		<!-- FOOTER
		============================================= -->
		<footer id="footer-1" class="bg-image wide-40 footer division">
			<div class="container">


				<!-- FOOTER CONTENT -->
				<div class="row">


					<!-- FOOTER INFO -->
					<div class="col-md-6 col-lg-4">
						<div class="footer-info mb-40">

							<!-- Footer Logo -->
							<img src="images/footer-logo-white.png" width="180" height="40" alt="Cytotec Colombia">

							<!-- Text -->
							<p class="p-sm mt-20">
								Cytotec Colombia ofrece Misoprostol y pastillas abortivas en Bogotá y todo el país.
								Atención discreta, rápida y confidencial por WhatsApp.
							</p>

							<!-- Social Icons -->
							<div class="footer-socials-links mt-20">
								<ul class="foo-socials text-center clearfix">
									<li>
										<a href="https://wa.me/+573245040176" target="_blank" rel="noopener noreferrer" class="ico-facebook">
											<i class="fab fa-whatsapp"></i>
										</a>
									</li>
									<li>
										<a href="mailto:info@cytotecbogota.com.co" class="ico-twitter">
											<i class="fas fa-envelope"></i>
										</a>
									</li>
								</ul>
							</div>

						</div>
					</div>


					<!-- FOOTER CONTACTS -->
					<div class="col-md-6 col-lg-4">
						<div class="footer-box mb-40">

							<!-- Title -->
							<h5 class="h5-xs">Contacto</h5>

							<!-- Location -->
							<p>Bogotá, Colombia</p>
							<p>Atención nacional a domicilio</p>

							<!-- Email -->
							<p class="foo-email mt-20">E: <a href="mailto:info@cytotecbogota.com.co">info@cytotecbogota.com.co</a></p>

							<!-- Phone -->
							<p>T: <a href="tel:+573245040176">+57 324 504 0176</a></p>

							<!-- Hours -->
							<p class="mt-10">Lun–Vie: 8am–8pm &nbsp;|&nbsp; Sáb: 10am–6pm &nbsp;|&nbsp; Dom: 10am–4pm</p>

						</div>
					</div>


					<!-- FOOTER LINKS -->
					<div class="col-md-6 col-lg-4">
						<div class="footer-box mb-40">

							<!-- Title -->
							<h5 class="h5-xs">Páginas</h5>

							<ul class="footer-list">
								<li><a href="index.html">Inicio</a></li>
								<li><a href="nosotros.html">Nosotros</a></li>
								<li><a href="faqs.html">Preguntas Frecuentes</a></li>
								<li><a href="contacto.html">Contacto</a></li>
								<li><a href="https://wa.me/+573245040176" target="_blank" rel="noopener noreferrer">WhatsApp Directo</a></li>
							</ul>

						</div>
					</div>


				</div>	  <!-- END FOOTER CONTENT -->


				<!-- FOOTER COPYRIGHT -->
				<div class="bottom-footer">
					<div class="row">
						<div class="col-md-12">
							<p class="footer-copyright">&copy; 2024 <span>Cytotec Colombia</span>. Todos los derechos reservados.</p>
						</div>
					</div>
				</div>


			</div>	   <!-- End container -->
		</footer>	<!-- END FOOTER -->
	`;

	var headerEl = document.getElementById('site-header');
	if (headerEl) headerEl.outerHTML = HEADER_HTML;

	var footerEl = document.getElementById('site-footer');
	if (footerEl) footerEl.outerHTML = FOOTER_HTML;

	// ── Floating WhatsApp button ──────────────────────────────────────────
	var waLink = document.createElement('link');
	waLink.rel = 'stylesheet';
	waLink.href = 'css/whatsapp-button.css';
	document.head.appendChild(waLink);

	var WA_PHONE   = '573245040176';
	var WA_MESSAGE = encodeURIComponent('Hola, me gustaría obtener información y asesoría. ¿Pueden ayudarme?');
	var WA_HREF    = 'https://wa.me/' + WA_PHONE + '?text=' + WA_MESSAGE;

	var waHTML = `
		<div class="wa-float-wrap" role="complementary" aria-label="Botón de contacto por WhatsApp">
			<a
				href="${WA_HREF}"
				class="wa-float-btn"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Escríbenos por WhatsApp"
				title="Escríbenos por WhatsApp"
			>
				<span class="wa-float-icon" aria-hidden="true">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" focusable="false">
						<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
					</svg>
					<span class="wa-float-dot" aria-hidden="true"></span>
				</span>
				<span class="wa-float-label">Escríbenos</span>
			</a>
		</div>
	`;

	var waContainer = document.createElement('div');
	waContainer.innerHTML = waHTML.trim();
	document.body.appendChild(waContainer.firstElementChild);
	// ─────────────────────────────────────────────────────────────────────
})();
