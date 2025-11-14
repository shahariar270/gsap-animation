// utils/animation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export class Animation {
    constructor(element, triggerAttributes) {
        this.element = element;
        this.triggerAttributes = triggerAttributes; // { scroll: {...}, hover: {...}, click: {...} }

        this.mouseEnterHandler = null;
        this.clickHandler = null;
    }

    destroy() {
        if (this.mouseEnterHandler) {
            this.element.removeEventListener("mouseenter", this.mouseEnterHandler);
            this.mouseEnterHandler = null;
        }

        if (this.clickHandler) {
            this.element.removeEventListener("click", this.clickHandler);
            this.clickHandler = null;
        }

        ScrollTrigger.getAll().forEach(t => t.kill());
    }

    animate() {
        if (!this.triggerAttributes) return;

        this.destroy();

        Object.keys(this.triggerAttributes).forEach(triggerType => {
            const attr = this.triggerAttributes[triggerType];
            if (!attr) return;

            const { animationType, x, xTo, y, yTo, opacity, opacityTo } = attr;

            const animationProps = { from: {}, to: {} };

            if (animationType === "fade") {
                animationProps.from = { opacity: 0, y: 50 };
                animationProps.to = { opacity: 1, y: 0, duration: 1, ease: "power2.out" };
            } else if (animationType === "3dmove") {
                animationProps.from = { opacity: 0, x: -200, rotationY: 180 };
                animationProps.to = { opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: "power3.out" };
            } else if (animationType === "custom") {
                animationProps.from = { opacity, x, y };
                animationProps.to = { opacity: opacityTo, x: xTo, y: yTo };
            }

            if (triggerType === "scroll") {
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

            if (triggerType === "hover") {
                this.mouseEnterHandler = () => {
                    gsap.fromTo(this.element, animationProps.from, animationProps.to);
                };
                this.element.addEventListener("mouseenter", this.mouseEnterHandler);
            }

            if (triggerType === "click") {
                this.clickHandler = () => {
                    gsap.fromTo(this.element, animationProps.from, animationProps.to);
                };
                this.element.addEventListener("click", this.clickHandler);
            }

            if (triggerType === "load") {
                gsap.fromTo(this.element, animationProps.from, animationProps.to);
            }
        });
    }
}
