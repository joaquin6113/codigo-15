import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App"

describe("Render app component", () => {
    it("Test app flow", () => {           // Con esto, la página ya "existe", 
        render(<App/>)                    // solamente no se puede ver
        const title = screen.getByText("Bill")
        expect(title).toBeInTheDocument()
    })                 
})