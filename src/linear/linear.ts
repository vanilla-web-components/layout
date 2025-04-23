import { Direction, Height, Width } from "../types";


class Linear extends HTMLElement {
    direction: Direction;
    uniqueKey: string;
    height: Height;
    width: Width;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.uniqueKey = this.getAttribute("unique-key") || "default-linear-layout-";
        this.direction = this.getAttribute("direction") === "horizontal" ? "horizontal" : "vertical";
        this.height = (this.getAttribute("height") as Height) || "max-content";
        this.width = (this.getAttribute("width") as Width) || "100dvw";
        // console.log(this.height, this.width);
    }

    async connectedCallback(): Promise<void> {
        const gap = this.getAttribute("gap") || "4rem";
        const classes = this.getAttribute('classes') || "";
        const margin_tb = `${(this.getAttribute("margin:tb") || "0") + "rem"}`;
        const margin_rl = `${(this.getAttribute("margin:rl") || "0") + "rem"}`;

        if (!this.shadowRoot) { return; }

        this.shadowRoot.innerHTML = `
        <style>
            .linear {
                height: ${this.height};
                width: ${this.width};
                margin: ${margin_tb} ${margin_rl};
                & slot {
                    display: flex;
                    flex-direction: ${this.direction === "horizontal" ? "row" : "column"};
                    gap: ${gap};
                    flex-wrap: nowrap;
                    ${this.direction === "horizontal" ? "overflow-x" : "overflow-y"}: auto;
                    ${this.direction === "horizontal" ? "overflow-y" : "overflow-x"}: clip;
                }
            }
        </style>
        <div class="linear ${classes}">
            <slot></slot>
        </div>
        `;
    }

}

function register(): void {
    if (!customElements.get('layout-linear')) {
        customElements.define('layout-linear', Linear);
    }
}

export default { register, Linear }
