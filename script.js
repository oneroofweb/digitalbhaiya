 
// ============= Project Section ==========================

 document.addEventListener("DOMContentLoaded", function() {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            let currentItems = 6; // Initially show 6 items
            
            loadMoreBtn.addEventListener('click', function() {
                const hiddenItems = document.querySelectorAll('.project-item.d-none');
                
                // Show next 3 items
                for (let i = 0; i < 3; i++) {
                    if (hiddenItems[i]) {
                        hiddenItems[i].classList.remove('d-none');
                        // Add fade-in animation class if you have animate.css
                        // hiddenItems[i].classList.add('animate__animated', 'animate__fadeIn');
                    }
                }
                
                // If no more hidden items, hide the button
                if (document.querySelectorAll('.project-item.d-none').length === 0) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        });

        // ===============FAQs Script Here========================

                document.addEventListener("DOMContentLoaded", function() {
            const loadMoreFaqBtn = document.getElementById('loadMoreFaqBtn');
            
            if (loadMoreFaqBtn) {
                loadMoreFaqBtn.addEventListener('click', function() {
                    // Select all hidden FAQ items
                    const hiddenFaqs = document.querySelectorAll('.faq-hidden');
                    
                    // Reveal them
                    hiddenFaqs.forEach(function(item) {
                        item.classList.remove('d-none');
                        // Optional: Add animation class
                        item.classList.add('fade-in-up'); 
                    });
                    
                    // Hide the button after revealing all
                    loadMoreFaqBtn.style.display = 'none';
                });
            }
        });

        // =========== Site Review Load More Code ====================

         document.addEventListener("DOMContentLoaded", function() {
            // Logic for Reviews Load More
            const loadMoreReviewsBtn = document.getElementById('loadMoreReviewsBtn');
            const hiddenReviewsContainer = document.querySelector('.review-hidden');
            
            if (loadMoreReviewsBtn && hiddenReviewsContainer) {
                loadMoreReviewsBtn.addEventListener('click', function() {
                    // Remove d-none to show the container holding the next 5 reviews
                    hiddenReviewsContainer.classList.remove('d-none');
                    
                    // Add animation class for smooth entry
                    hiddenReviewsContainer.classList.add('fade-in-up');
                    
                    // Hide the button after showing all reviews
                    loadMoreReviewsBtn.style.display = 'none';
                });
            }
        });

      // =========== Service Detail Content ====================
      
    document.addEventListener("DOMContentLoaded", function() {
        // Saare buttons ko select karein (Class ke through)
        const buttons = document.querySelectorAll('.readMoreBtn');

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                
                // 1. Jis button par click hua, uska apna parent card dhoondo
                const card = this.closest('.review-card-container');
                
                // 2. Sirf USI card ke andar wala hidden text dhoondo
                const textSpan = card.querySelector('.moreText');

                if (textSpan) {
                    // 3. Toggle visibility (Show/Hide)
                    textSpan.classList.toggle('d-none');

                    // 4. Button Text aur Icon update karo
                    if (textSpan.classList.contains('d-none')) {
                        this.innerHTML = 'Read More <i class="fas fa-chevron-down ms-2"></i>';
                    } else {
                        this.innerHTML = 'Read Less <i class="fas fa-chevron-up ms-2"></i>';
                    }
                }
            });
        });
    });

    // ============================= BLog JS ===========================

        document.addEventListener("DOMContentLoaded", function() {
            const loadBtns = document.querySelectorAll('.loadMoreTabBtn');
            loadBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const activeTab = this.closest('.tab-pane');
                    const hiddenBlogs = activeTab.querySelectorAll('.blog-hidden');
                    hiddenBlogs.forEach(function(blog) {
                        blog.classList.remove('d-none');
                        blog.classList.add('fade-in-up');
                    });
                    this.style.display = 'none';
                });
            });
        });


    // =========================== Contact Form JS ==========================
    document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('whatsappContactForm');

            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault(); // Page refresh hone se rokein

                    // Values get karein
                    const name = document.getElementById('wName').value;
                    const mobile = document.getElementById('wMobile').value;
                    const email = document.getElementById('wEmail').value;
                    const service = document.getElementById('wService').value;
                    const city = document.getElementById('wCity').value;

                    // Message Format karein
                    const message = `*New Lead Enquiry (Website)*%0A%0A` +
                                    `=> *Name:* ${name}%0A` +
                                    `=> *Mobile:* ${mobile}%0A` +
                                    `=> *Email:* ${email}%0A` +
                                    `=> *Service:* ${service}%0A` +
                                    `=> *City:* ${city}%0A%0A` +
                                    `Please provide more details.`;

                    // WhatsApp URL (Aapka Number: 919621056436)
                    const whatsappUrl = `https://wa.me/919621056436?text=${message}`;

                    // New Tab mein Open karein
                    window.open(whatsappUrl, '_blank');
                });
            }
        });

    // ============ dropdown navbar =================
        document.addEventListener("DOMContentLoaded", function() {
            const path = window.location.pathname;
            const page = path.split("/").pop();
            const cityLabel = document.getElementById('currentCity');

            if (cityLabel) {
                if (page === "noida.html") {
                    cityLabel.innerText = "Noida";
                } else if (page === "delhi.html") {
                    cityLabel.innerText = "Delhi";
                } else {
                    cityLabel.innerText = "Lucknow";
                }
            }
        });

