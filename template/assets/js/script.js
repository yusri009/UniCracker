// JavaScript for UniCracker website

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for logo image
    const logoPlaceholder = document.getElementById('logo-placeholder');
    if (logoPlaceholder) {
        logoPlaceholder.src = 'https://via.placeholder.com/40x40?text=UC';
    }
    
    // Placeholder for testimonial images
    const testimonialImg1 = document.getElementById('testimonial-img-1');
    const testimonialImg2 = document.getElementById('testimonial-img-2');
    const testimonialImg3 = document.getElementById('testimonial-img-3');
    
    if (testimonialImg1) testimonialImg1.src = 'https://via.placeholder.com/80x80';
    if (testimonialImg2) testimonialImg2.src = 'https://via.placeholder.com/80x80';
    if (testimonialImg3) testimonialImg3.src = 'https://via.placeholder.com/80x80';
    
    // Chatbot icon functionality
    const chatbotIcon = document.querySelector('.chatbot-icon');
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', function() {
            alert('Uni Bot is here to help! This is a placeholder for the chatbot interface.');
        });
    }
    
    // Course search functionality (placeholder)
    const findCoursesBtn = document.querySelector('.course-search .btn');
    if (findCoursesBtn) {
        findCoursesBtn.addEventListener('click', function() {
            const zscoreInput = document.getElementById('zscore');
            const streamSelect = document.getElementById('stream');
            
            if (zscoreInput && streamSelect) {
                const zscore = zscoreInput.value;
                const stream = streamSelect.value;
                
                if (!zscore) {
                    alert('Please enter your Z-Score');
                    return;
                }
                
                if (!stream || stream === '') {
                    alert('Please select your subject stream');
                    return;
                }
                
                // In a real application, this would make an API call
                // For now, we'll just scroll to the results section
                const resultsSection = document.querySelector('.course-results-section');
                if (resultsSection) {
                    resultsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    // Responsive navigation for mobile (to be implemented)
    // This would typically include a hamburger menu for smaller screens
});
