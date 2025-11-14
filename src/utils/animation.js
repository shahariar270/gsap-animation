import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export class Animation {
    constructor(element, attribute) {
        this.element = element;
        this.attribute = attribute;

    }
    destroy() {
        if (this.currentAnimation) {
            this.currentAnimation.kill();
            ScrollTrigger.getAll().forEach(t => t.kill()); // remove scroll triggers if needed
        }
    }

    animate() {
        if (!this.attribute) return;
        const {
            animationType,
            triggerType,
            x,
            xTo,
            y,
            yTo,
            opacityTo,
            opacity,
        } = this.attribute;

        this.destroy();
        const animationProps = {
            from: {},
            to: {}
        };

        if (animationType === "fade") {
            animationProps.from = { opacity: 0, y: 50 };
            animationProps.to = { opacity: 1, y: 0, duration: 1, ease: "power2.out" };

        } else if (animationType === "3dmove") {
            animationProps.from = { opacity: 0, x: -200, rotationY: 180 };
            animationProps.to = { opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: "power3.out" };

        } else if (animationType === "custom") {
            animationProps.from = {
                opacity: opacity,
                x: x,
                y: y,
            };
            animationProps.to = {
                opacity: opacityTo,
                x: xTo,
                y: yTo,
            };
        }
        //trigger control
        if (triggerType === 'scroll') {
            gsap.fromTo(
                this.element,
                animationProps.from,
                {
                    ...animationProps.to,
                    scrollTrigger: {
                        trigger: this.element,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
        else if (triggerType === 'hover') {
            this.element.addEventListener("mouseenter", () => {
                gsap.fromTo(this.element, animationProps.from, animationProps.to);
            });
        }
        else if (triggerType === 'click') {
            this.element.addEventListener("click", () => {
                gsap.fromTo(this.element, animationProps.from, animationProps.to);
            });
        }
        else if (triggerType === 'load') {
            gsap.fromTo(this.element, animationProps.from, animationProps.to);
        }

    }
}   