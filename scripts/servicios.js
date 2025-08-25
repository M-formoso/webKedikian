// Servicios Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize servicios components
    initServiceAnimations();
    initProcessSteps();
    initServiceCards();
    initParallaxEffects();
});

// Service Animations
function initServiceAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards and process steps
    const animateElements = document.querySelectorAll('.service-card-large, .process-step');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Process Steps Animation
function initProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.2}s`;
    });
}

// Service Cards Interactions
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card-large');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Show Service Detail Modal
function showServiceDetail(serviceType) {
    const serviceDetails = {
        'perforacion': {
            title: 'Perforación y Voladura',
            description: 'Equipos altamente especializados en perforación y voladura prestando apoyo en proyectos de minería y de obra civil.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            longDescription: 'Nuestros servicios de perforación y voladura utilizan tecnología de punta para garantizar precisión y seguridad en cada operación. Contamos con equipos especializados y personal altamente capacitado para manejar proyectos de cualquier escala.',
            features: [
                'Perforación de precisión con equipos automatizados',
                'Voladuras controladas y seguras',
                'Análisis geotécnico previo',
                'Cumplimiento de normativas de seguridad',
                'Monitoreo ambiental continuo',
                'Equipos de última generación'
            ],
            applications: ['Minería', 'Túneles', 'Canteras', 'Demolición', 'Obra Civil']
        },
        'mantenimiento': {
            title: 'Mantenimiento de Equipos',
            description: 'Mantenimiento preventivo y reparación de nuestros equipos, optimizando la disponibilidad y reduciendo el tiempo de inactividad.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            longDescription: 'Nuestro programa integral de mantenimiento asegura que todos los equipos operen con máxima eficiencia y seguridad. Implementamos un sistema de mantenimiento predictivo que reduce costos y aumenta la vida útil de la maquinaria.',
            features: [
                'Mantenimiento preventivo programado',
                'Diagnóstico computerizado',
                'Repuestos originales y de calidad',
                'Técnicos especializados certificados',
                'Sistema de monitoreo remoto',
                'Servicio de emergencia 24/7'
            ],
            applications: ['Retroexcavadoras', 'Bulldozers', 'Grúas', 'Compactadoras', 'Equipos Mineros']
        },
        'movimiento': {
            title: 'Movimiento de Tierra',
            description: 'Servicios especializados en excavación, nivelación y preparación de terrenos para proyectos de construcción e infraestructura.',
            image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            longDescription: 'Ofrecemos servicios completos de movimiento de tierra con maquinaria de última generación. Nuestro equipo técnico realiza estudios topográficos y geotécnicos para optimizar cada proyecto.',
            features: [
                'Excavación de fundaciones',
                'Nivelación y compactación',
                'Movimiento de grandes volúmenes',
                'Preparación de sitios',
                'Drenaje y obras de contención',
                'Topografía y replanteo'
            ],
            applications: ['Construcción', 'Infraestructura', 'Urbanizaciones', 'Carreteras', 'Aeropuertos']
        },
        'paisajismo': {
            title: 'Paisajismo',
            description: 'Diseño, implementación y mantenimiento de espacios verdes, creando entornos naturales que mejoran la calidad de vida.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            longDescription: 'Creamos y mantenemos espacios verdes que transforman el entorno urbano y rural. Nuestros diseños integran sostenibilidad, estética y funcionalidad para crear espacios únicos.',
            features: [
                'Diseño paisajístico personalizado',
                'Selección de especies nativas',
                'Sistemas de riego eficientes',
                'Mantenimiento integral',
                'Poda y fertilización especializada',
                'Jardines sostenibles'
            ],
            applications: ['Residencial', 'Comercial', 'Espacios Públicos', 'Industrial', 'Recreativo']
        }
    };

    const service = serviceDetails[serviceType];
    if (!service) return;

    const modal = document.getElementById('service-detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = service.title;
    modalBody.innerHTML = `
        <div class="service-detail-content">
            <div class="service-detail-text">
                <h3>Descripción del Servicio</h3>
                <p>${service.longDescription}</p>
                
                <div class="service-features">
                    <h4>Servicios Incluidos:</h4>
                    <ul>
                        ${service.features.map(feature => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            <div class="service-detail-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
        </div>
        
        <div class="applications-section">
            <h4>Aplicaciones:</h4>
            <div class="applications-grid">
                ${service.applications.map(app => `
                    <span class="application-tag">${app}</span>
                `).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add animation class
    setTimeout(() => {
        modal.querySelector('.modal-content').style.animation = 'modalFadeIn 0.3s ease';
    }, 10);
}

// Close Service Detail Modal
function closeServiceDetail() {
    const modal = document.getElementById('service-detail-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.servicios-hero-background, .cta-background');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                element.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    });
}

// Add CSS animations for service cards
const additionalCSS = `
    .service-card-large {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .service-card-large.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .process-step {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .process-step.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card-large:hover .service-content {
        transform: translateY(-5px);
    }
    
    .service-content {
        transition: transform 0.3s ease;
    }
    
    /* Stagger animation for service cards */
    .service-card-large:nth-child(1) { animation-delay: 0.1s; }
    .service-card-large:nth-child(2) { animation-delay: 0.2s; }
    .service-card-large:nth-child(3) { animation-delay: 0.3s; }
    .service-card-large:nth-child(4) { animation-delay: 0.4s; }
`;

// Add additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalCSS;
document.head.appendChild(additionalStyleSheet);

// Handle keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (document.getElementById('service-detail-modal').style.display === 'block') {
        if (e.key === 'Escape') {
            closeServiceDetail();
        }
    }
});

// Handle click outside modal to close
document.addEventListener('click', function(e) {
    const modal = document.getElementById('service-detail-modal');
    if (e.target === modal) {
        closeServiceDetail();
    }
});

// Export functions for global use
window.showServiceDetail = showServiceDetail;
window.closeServiceDetail = closeServiceDetail;