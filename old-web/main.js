

const HEADER = `
	<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="header__content">
						<a data-scroll href="index.html" class="header__logo">
							<img src="img/logo.png" alt="Cytotec Bogotá - Inicio">
						</a>

						<nav class="header__nav" aria-label="Navegación principal">
							<a data-scroll href="index.html">inicio</a>
							<a data-scroll href="products.html">Productos</a>
							<a data-scroll href="metodo-ive.html">Método ive</a>
							<a data-scroll href="faqs.html">FAQ's</a>
							<a data-scroll href="contact.html">Contacto</a>
						</nav>

						<div class="header__wrap">
							<div class="header__phone">
								<a href="tel:3245040176"> 324 504 0176</a>
								<span>Llámanos</span>
							</div>
							<a data-scroll href="https://wa.me/+573245040176" target="_blank" class="header__cart" style="background: #25d366;">
								<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" aria-label="WhatsApp"
									role="img" viewBox="0 0 512 512" fill="#000000">
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<rect width="512" height="512" rx="15%" fill="#25d366"></rect>
										<path fill="#25d366" stroke="#ffffff" stroke-width="26"
											d="M123 393l14-65a138 138 0 1150 47z"></path>
										<path fill="#ffffff"
											d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18">
										</path>
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
`
const FOOTER  = `
	<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="footer__content">
						<h6 class="footer__copyright">©Copyright CYTOTEC BOGOTA Todos los derechos reservados.</h6>

						<div class="footer__social">
							<a class="facebook" href="#"><i class="ion ion-logo-facebook"></i></a>
							<a class="instagram" href="#"><i class="ion ion-logo-instagram"></i></a>
							<a class="twitter" href="#"><i class="ion ion-logo-twitter"></i></a>
							<a class="vk" href="#"><i class="ion ion-logo-vk"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>`
document.querySelector(".header").innerHTML = HEADER;
document.querySelector(".footer").innerHTML = FOOTER;