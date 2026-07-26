import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import InventorCard from "./InventorCard";

const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

describe("InventorCard", () => {
  it("renders inventor content and a detail link", () => {
    render(
      <BrowserRouter future={routerFutureFlags}>
        <InventorCard
          inventor={{
            id: "lewis-latimer",
            slug: "lewis-latimer",
            displayName: "Lewis Latimer",
            birthYear: 1848,
            deathYear: 1928,
            images: [],
          }}
          index={0}
        />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("link", { name: /view details for lewis latimer/i }),
    ).toBeTruthy();
    expect(screen.getByText("Lewis Latimer")).toBeTruthy();
    expect(screen.getByText("1848")).toBeTruthy();
    expect(screen.getByText("d. 1928")).toBeTruthy();
  });
});
