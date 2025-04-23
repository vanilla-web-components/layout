type Direction = "horizontal" | "vertical";
type Orientation = "landscape" | "portrait";
type Height = "100px" | "200px" | "300px" | "400px" | "500px" | "600px" |
    "100dvh" | "90dvh" | "80dvh" | "70dvh" |
    "60dvh" | "50dvh" | "40dvh" | "30dvh" |
    "20dvh" | "10dvh" |
    "100rem" | "90rem" | "80rem" | "70rem" |
    "60rem" | "50rem" | "40rem" | "30rem" |
    "20rem" | "10rem" |
    "min-content" | "max-content";
type Width = "100px" | "200px" | "300px" | "400px" | "500px" | "600px" |
    "100dvw" | "90dvw" | "80dvw" | "70dvw" |
    "60dvw" | "50dvw" | "40dvw" | "30dvw" |
    "20dvw" | "10dvw" |
    "100rem" | "90rem" | "80rem" | "70rem" |
    "60rem" | "50rem" | "40rem" | "30rem" |
    "20rem" | "10rem" |
    "min-content" | "max-content";
type Gap = "1rem" | "2rem" | "4rem" |
    "1dvh" | "2dvh" | "4dvh" |
    "1dvw" | "2dvw" | "4dvw" |
    "1px" | "2px" | "4px" |
    "10px" | "20px" | "40px";

export type { Direction, Orientation, Height, Width, Gap };
