class Linear extends HTMLElement {
    direction: "vertical" | "horizontal";
    uniqueKey: string;
    height: string;
    width: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.uniqueKey = this.getAttribute("unique-key") || "default-linear-layout-";
        this.direction = this.getAttribute("direction") === "horizontal" ? "horizontal" : "vertical";
        this.height = this.getAttribute("height") || "max-content";
        this.width = this.getAttribute("width") || "100dvw";
        console.log(this.height, this.width);
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
                display: flex;
                flex-direction: ${this.direction === "horizontal" ? "row" : "column"};
                gap: ${gap};
                margin: ${margin_tb} ${margin_rl};
                flex-wrap: nowrap;
                ${this.direction === "horizontal" ? "overflow-x" : "overflow-y"}: auto;
                ${this.direction === "horizontal" ? "overflow-y" : "overflow-x"}: hidden;
            }
        </style>
        <slot class="linear ${classes}"></slot>
        `;
    }

}

function registerLinear(): void {
    if (!customElements.get('layout-linear')) {
        customElements.define('layout-linear', Linear);
    }
}

export default { registerLinear, Linear }


// <div class="linear ${classes}">
// </div>
