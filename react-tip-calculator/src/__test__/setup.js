import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest"

//se va a ejecutar después de cada test
afterEach(() => {
    cleanup()
})