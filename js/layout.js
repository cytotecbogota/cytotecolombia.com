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
})();
