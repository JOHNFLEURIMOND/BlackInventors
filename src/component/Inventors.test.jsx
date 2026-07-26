import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inventors from "./Inventors";
import dataLoader from "../lib/dataLoader";

const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

describe("Inventors discovery", () => {
  it("filters inventors by search text and era", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter future={routerFutureFlags}>
        <Inventors />
      </BrowserRouter>,
    );

    const getCards = () =>
      screen
        .getAllByRole("link", { name: /view details for/i })
        .map((link) => link.closest("article"))
        .filter(Boolean);

    const totalCards = getCards().length;

    await user.type(screen.getByLabelText(/search/i), "Latimer");
    expect(getCards()).toHaveLength(1);

    await user.clear(screen.getByLabelText(/search/i));
    await user.selectOptions(
      screen.getByRole("combobox", { name: /^era$/i }),
      "1700s",
    );

    const filteredCards = getCards();
    expect(filteredCards.length).toBeGreaterThan(0);
    expect(filteredCards.length).toBeLessThan(totalCards);

    for (const card of filteredCards) {
      expect(card.textContent).toMatch(/1731|1740|1767|1743|1700s/);
    }

    expect(dataLoader.getAllInventors().length).toBeGreaterThan(totalCards - 1);
  });
});
