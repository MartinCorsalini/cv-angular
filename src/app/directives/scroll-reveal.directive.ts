import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'fade-in-up'; // Clase por defecto
  @Input() delay: number = 0; // Delay en ms
  @Input() threshold: number = 0.15; // Porcentaje visible para activar
  @Input() once: boolean = true; // Si se anima solo una vez

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Agregar clase inicial (oculto)
    this.renderer.addClass(this.el.nativeElement, this.animationClass);

    // Configurar Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Aplicar delay si existe (solo cuando entra en viewport)
          if (this.delay > 0) {
            this.renderer.setStyle(
              this.el.nativeElement,
              'transition-delay',
              `${this.delay}ms`
            );
          }

          // Pequeño delay para asegurar que el navegador procesa la transición
          setTimeout(() => {
            // Agregar clase 'is-visible' cuando entra en viewport
            this.renderer.addClass(this.el.nativeElement, 'is-visible');
          }, 10);

          // Limpiar estilos inline después de que termine la animación completa
          const totalAnimationTime = 1200 + this.delay; // duración de animación + delay
          setTimeout(() => {
            this.renderer.removeStyle(this.el.nativeElement, 'transition-delay');
            // Remover la clase de animación para que no interfiera con hover
            this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          }, totalAnimationTime);

          // Dejar de observar si once=true
          if (this.once) {
            this.observer.unobserve(this.el.nativeElement);
          }
        } else if (!this.once) {
          // Remover clase si once=false y sale del viewport
          this.renderer.removeClass(this.el.nativeElement, 'is-visible');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
