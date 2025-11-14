import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export class Animation {
    constructor(element, attribute) {
        this.element = element;
        this.attribute = attribute;

    }
    animate() {
        if (!this.attribute) return;
        const { animationType, triggerType } = this.attribute;

        let animationProps;

        if (animationType === 'fade') {
            animationProps = { opacity: 0, y: 50, duration: 1, ease: "power2.out" };
        } else if (animationType === '3dmove') {
            animationProps = { opacity: 0, x: -200, rotationY: 180, duration: 1.2, ease: "power3.out" };
        } else if (animationType === 'custom') {
            animationProps = { opacity: 0, x: 100, y: -100, scale: 0.5, rotation: 360, duration: 1.5, ease: "elastic.out(1,0.5)" };
        }

        if (triggerType === 'scroll') {
            gsap.from(this.element, {
                ...animationProps,
                scrollTrigger: {
                    trigger: this.element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }
        else if (triggerType === 'hover') {
            this.element.addEventListener('mouseenter', () => gsap.from(this.element, animationProps));
        }
        else if (triggerType === 'click') {
            this.element.addEventListener('click', () => gsap.from(this.element, animationProps));
        }
        else if (triggerType === 'load') {
            gsap.from(this.element, animationProps);
        }

    }
}   