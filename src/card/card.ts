import { Direction, Height, Orientation, Width } from "../types";

class Card extends HTMLElement {
    orientation: Orientation = "landscape";
    uniqueKey: string;
    height: Height;
    width: Width;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.uniqueKey = this.getAttribute("unique-key") || "default-card-";
        this.orientation = this.getAttribute("orientation") as Orientation;
        this.height = this.getAttribute("height") as Height || "20dvh";
        this.width = this.getAttribute("width") as Width || "30dvw";
    }

    async connectedCallback(): Promise<void> {
        const direction = this.orientation === "landscape" ? "row" : "column";
        const gap = this.getAttribute("gap") || "4rem";
        if (!this.shadowRoot) { return; }
        this.shadowRoot.innerHTML = `
        <style>
            .card {
                height: ${this.height};
                width: ${this.width};
                & slot {
                    display: flex;
                    flex-direction: ${direction};
                    gap: ${gap};
                }
            }

        </style>
        <div class="card"
                height="${this.height}"
                width="${this.width}"
                direction="${direction}">
                    <slot></slot>
        </div>
        `;
    }
}

function register(): void {
    if (!customElements.get('card-layout')) {
        customElements.define('card-layout', Card);
    }
}

export default { register, Card };
