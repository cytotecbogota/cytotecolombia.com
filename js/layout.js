(function () {
	var HEADER_HTML = `
		<!-- HEADER
		============================================= -->
		<header id="header" class="header">


			<!-- MOBILE HEADER -->
		    <div class="wsmobileheader clearfix">
		    	<a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
		    	<span class="smllogo"><img src="images/logo.png" width="180" height="40" alt="mobile-logo"/></span>
		    	<a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i></a>
		 	</div>


		 	<!-- HEADER STRIP -->
		 	<div class="headtoppart bg-blue clearfix">
		    	<div class="headerwp clearfix">

		    		<!-- Address -->
		     		<div class="headertopleft">
		        		<div class="address clearfix"><span><i class="fas fa-map-marker-alt"></i>121 King St,
		            		Melbourne, VIC 3000 </span> <a href="tel:123456789" class="callusbtn"><i class="fas fa-phone"></i>(800)-569-7890</a>
		            	</div>
		     		</div>

		     		<!-- Social Links -->
				    <div class="headertopright">
				    	<a class="googleicon" title="Google" href="#"><i class="fab fa-google"></i> <span class="mobiletext02">Google</span></a>
				        <a class="linkedinicon" title="Linkedin" href="#"><i class="fab fa-linkedin-in"></i> <span class="mobiletext02">Linkedin</span></a>
				        <a class="twittericon" title="Twitter" href="#"><i class="fab fa-twitter"></i> <span class="mobiletext02">Twitter</span></a>
				        <a class="facebookicon" title="Facebook" href="#"><i class="fab fa-facebook-f"></i> <span class="mobiletext02">Facebook</span></a>
			      	</div>

			    </div>
		  	</div>	<!-- END HEADER STRIP -->


		  	<!-- NAVIGATION MENU -->
		  	<div class="wsmainfull menu clearfix">
    			<div class="wsmainwp clearfix">

    				<!-- LOGO IMAGE -->
    				<!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) -->
    				<div class="desktoplogo"><a href="index.html"><img src="images/logo.png" width="180" height="40" alt="header-logo"></a></div>

    				<!-- MAIN MENU -->
      				<nav class="wsmenu clearfix">
        				<ul class="wsmenu-list">


        					<!-- DROPDOWN MENU -->
					        <li aria-haspopup="true"><a href="#">Home <span class="wsarrow"></span></a>
					           	<ul class="sub-menu">
					           		<li aria-haspopup="true"><a href="#">Dummy Link Style #1</a></li>
					              	<li aria-haspopup="true"><a href="#">Dummy Link Style #2</a></li>
					              	<li aria-haspopup="true"><a href="#">Dummy Link Style #3</a></li>
					              	<li aria-haspopup="true"><a href="#">Dummy Link Style #4</a></li>
					              	<li aria-haspopup="true"><a href="#">Dummy Link Style #5</a></li>
					           	</ul>
					          </li>	<!-- END DROPDOWN MENU -->


					          <!-- PAGES -->
					          <li aria-haspopup="true"><a href="#">Pages <span class="wsarrow"></span></a>
            					<div class="wsmegamenu clearfix">
             						<div class="container">
               							<div class="row">

               								<!-- MEGAMENU LINKS -->
               								<ul class="col-lg-3 col-md-12 col-xs-12 link-list">
							                    <li class="title">Standard Pages:</li>
							                    <li><a href="about-us.html">About Us Page</a></li>
							                    <li><a href="who-we-are.html">Who We Are</a></li>
							                    <li><a href="all-services.html">Our Services</a></li>
							                    <li><a href="service-1.html">Service Single #1</a></li>
							                    <li><a href="service-2.html">Service Single #2</a></li>
							                </ul>

							                <!-- MEGAMENU LINKS -->
               								<ul class="col-lg-3 col-md-12 col-xs-12 link-list">
							                    <li class="title">Medical Pages:</li>
							                    <li><a href="all-departments.html">Our Departments</a></li>
							                    <li><a href="department-single.html">Department Single</a></li>
							                    <li><a href="all-doctors.html">Meet the Doctors</a></li>
							                    <li><a href="doctor-1.html">Doctor's Profile #1</a></li>
							                    <li><a href="doctor-2.html">Doctor's Profile #2</a></li>
							                    <li><a href="timetable.html">Doctors Timetable</a></li>
							                </ul>

							                <!-- MEGAMENU LINKS -->
               								<ul class="col-lg-3 col-md-12 col-xs-12 link-list">
							                    <li class="title">Special Pages:</li>
							                    <li><a href="pricing-1.html">Pricing Packages #1</a></li>
							                    <li><a href="pricing-2.html">Pricing Packages #2</a></li>
							                    <li><a href="appointment.html">Make an Appointment</a></li>
							                    <li><a href="faqs.html">FAQs Page</a></li>
							                    <li><a href="terms.html">Terms of Use</a></li>
							                </ul>

							                <!-- MEGAMENU LINKS -->
               								<ul class="col-lg-3 col-md-12 col-xs-12 link-list">
							                    <li class="title">Auxiliary Pages:</li>
							                    <li><a href="gallery.html">Our Gallery</a></li>
							                    <li><a href="blog-listing.html">Blog Listing Page</a></li>
							                    <li><a href="single-post.html">Single Blog Post</a></li>
							                    <li><a href="contacts-1.html">Contact Us #1</a></li>
							                    <li><a href="contacts-2.html">Contact Us #2</a></li>
							                </ul>

						                </div>  <!-- End row -->
						            </div>  <!-- End container -->
						        </div>  <!-- End wsmegamenu -->
						    </li>	<!-- END PAGES -->


					          <!-- HALF MENU -->
					          <li aria-haspopup="true"><a href="#">Half Menu <span class="wsarrow"></span></a>
					            	<div class="wsmegamenu clearfix halfmenu">
					              		<div class="container-fluid">
					                		<div class="row">

					                			<!-- Links -->
							                	<ul class="col-lg-6 col-md-12 col-xs-12 link-list">
							                    	<li class="title">For Patients:</li>
								                    <li><a href="#">Meet The Doctors</a></li>
								                    <li><a href="#">Patient Info Sheets</a></li>
								                    <li><a href="#">Online Patients Portal</a></li>
								                    <li><a href="#">Patients Testimonials</a></li>
								                    <li><a href="#">Blog &amp; Latest News</a></li>
							                  	</ul>

							                  	<!-- Links -->
								                <ul class="col-lg-6 col-md-12 col-xs-12 link-list">
								                    <li class="title">Quick Links:</li>
								                    <li><a href="#">Terms &amp; Privacy Policy</a></li>
								                    <li><a href="#">Donor Privacy Policy</a></li>
								                    <li><a href="#">Workers Compensation</a></li>
								                    <li><a href="#">Insurance Information</a></li>
								                    <li><a href="#">After Hours Care</a></li>
								                </ul>

					                		</div>
					              		</div>
					            	</div>
					          </li>	<!-- END HALF MENU -->


					          <!-- MEGAMENU -->
					          <li aria-haspopup="true"><a href="#">Mega Menu <span class="wsarrow"></span></a>
            					<div class="wsmegamenu clearfix">
             						<div class="container">
               							<div class="row">

               								<!-- MEGAMENU QUICK LINKS -->
               								<ul class="col-lg-3 col-md-12 col-xs-12 link-list">
							                    <li class="title">Quick Links:</li>
							                    <li><a href="#">For Referring Doctors</a></li>
							                    <li><a href="#">Terms &amp; Privacy Policy</a></li>
							                    <li><a href="#">Donor Privacy Policy</a></li>
							                    <li><a href="#">Patient Info Sheets</a></li>
							                    <li><a href="#">Online Patients Portal</a></li>
							                    <li><a href="#">Insurance Information</a></li>
							                    <li><a href="#">Patients Testimonials</a></li>
							                </ul>

							                <!-- MEGAMENU FEATURED NEWS -->
							                <div class="col-lg-5 col-md-12 col-xs-12">

							                	<!-- Title -->
							                    <h3 class="title">Featured News:</h3>

							                    <!-- Image -->
							                    <div class="fluid-width-video-wrapper"><img src="images/blog/featured-news.jpg" alt="featured-news" /></div>

							                    <!-- Text -->
							                    <h5 class="h5-xs"><a href="#">5 Benefits of integrative medicine</a></h5>
							                    <p class="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
							                       tempus feugiat dolor impedit magna purus at pretium gravida donec
							                    </p>

							                </div>	<!-- END MEGAMENU FEATURED NEWS -->


							                <!-- MEGAMENU LATEST NEWS -->
							                <div class="col-lg-4 col-md-12 col-xs-12">

							                	<!-- Title -->
                    							<h3 class="title">Latest News:</h3>

                    							<!-- Latest News -->
                    							<ul class="latest-news">

													<!-- Post #1 -->
													<li class="clearfix d-flex align-items-center">
														<img class="img-fluid" src="images/blog/latest-post-1.jpg" alt="blog-post-preview" />
														<div class="post-summary">
															<a href="single-post.html">Etiam sapien risus ante auctor tempus accumsan an empor ...</a>
															<p>43 Comments</p>
														</div>
													</li>

													<!-- Post #2 -->
													<li class="clearfix d-flex align-items-center">
														<img class="img-fluid" src="images/blog/latest-post-2.jpg" alt="blog-post-preview" />
														<div class="post-summary">
															<a href="single-post.html">Blandit tempor a sapien ipsum, porta risus auctor justo ...</a>
															<p>38 Comments</p>
														</div>
													</li>

													<!-- Post #3 -->
													<li class="clearfix d-flex align-items-center">
														<img class="img-fluid" src="images/blog/latest-post-3.jpg" alt="blog-post-preview" />
														<div class="post-summary">
															<a href="single-post.html">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</a>
															<p>29 Comments</p>
														</div>
													</li>

												</ul>
                    						</div>	<!-- END MEGAMENU LATEST NEWS -->

						                </div>  <!-- End row -->
						            </div>  <!-- End container -->
						        </div>  <!-- End wsmegamenu -->
						    </li>	<!-- END MEGAMENU -->


						    <!-- SIMPLE NAVIGATION LINK -->
						    <li class="nl-simple" aria-haspopup="true"><a href="#">Simple Link</a></li>

						    <!-- NAVIGATION MENU BUTTON -->
						    <li class="nl-simple header-btn" aria-haspopup="true"><a href="appointment.html">Make an Appointment</a></li>


        				</ul>
        			</nav>	<!-- END MAIN MENU -->

    			</div>
    		</div>	<!-- END NAVIGATION MENU -->


		</header>	<!-- END HEADER -->
	`;

	var FOOTER_HTML = `
		<!-- FOOTER-1
		============================================= -->
		<footer id="footer-1" class="bg-image wide-40 footer division">
			<div class="container">


				<!-- FOOTER CONTENT -->
				<div class="row">


					<!-- FOOTER INFO -->
					<div class="col-md-6 col-lg-3">
						<div class="footer-info mb-40">

							<!-- Footer Logo -->
							<!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) -->
							<img src="images/footer-logo-white.png" width="180" height="40" alt="footer-logo">

							<!-- Text -->
							<p class="p-sm mt-20">Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta
							   justo at velna auctor congue
							</p>

							<!-- Social Icons -->
							<div class="footer-socials-links mt-20">
								<ul class="foo-socials text-center clearfix">

									<li><a href="#" class="ico-facebook"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#" class="ico-twitter"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#" class="ico-google-plus"><i class="fab fa-google-plus-g"></i></a></li>
									<li><a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a></li>

								</ul>
							</div>

						</div>
					</div>


					<!-- FOOTER CONTACTS -->
					<div class="col-md-6 col-lg-3">
						<div class="footer-box mb-40">

							<!-- Title -->
							<h5 class="h5-xs">Our Location</h5>

							<!-- Address -->
							<p>121 King Street, Melbourne,</p>
							<p>Victoria 3000 Australia</p>

							<!-- Email -->
							<p class="foo-email mt-20">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>

							<!-- Phone -->
							<p>P: +12 9 8765 4321</p>

						</div>
					</div>


					<!-- FOOTER WORKING HOURS -->
					<div class="col-md-6 col-lg-3">
						<div class="footer-box mb-40">

							<!-- Title -->
							<h5 class="h5-xs">Working Time</h5>

							<!-- Working Hours -->
							<p class="p-sm">Mon - Wed - <span>9:00 AM - 7:00 PM</span></p>
							<p class="p-sm">Thursday - <span>9:00 AM - 6:30 PM</span></p>
							<p class="p-sm">Friday - <span>9:00 AM - 6:00 PM</span></p>
							<p class="p-sm">Sat - Sun - <span>Closed</span></p>

						</div>
					</div>


					<!-- FOOTER PHONE NUMBER -->
					<div class="col-md-6 col-lg-3">
						<div class="footer-box mb-40">

							<!-- Title -->
							<h5 class="h5-xs">Emergency Cases</h5>

							<!-- Footer List -->
							<h5 class="h5-xl blue-color">1-800-123-4560</h5>

							<!-- Text -->
							<p class="p-sm mt-15">Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta
							   justo velna aucto magna
							</p>

						</div>
					</div>


				</div>	  <!-- END FOOTER CONTENT -->


				<!-- FOOTER COPYRIGHT -->
				<div class="bottom-footer">
					<div class="row">
						<div class="col-md-12">
							<p class="footer-copyright">&copy; 2019 <span>MedService</span>. All Rights Reserved</p>
						</div>
					</div>
				</div>


			</div>	   <!-- End container -->
		</footer>	<!-- END FOOTER-1 -->
	`;

	var headerEl = document.getElementById('site-header');
	if (headerEl) headerEl.outerHTML = HEADER_HTML;

	var footerEl = document.getElementById('site-footer');
	if (footerEl) footerEl.outerHTML = FOOTER_HTML;
})();
