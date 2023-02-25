import { render, screen } from '@testing-library/react';

function AfficherNom({nom}){
  return <image src="http://google.com" data-testid="coucou"/>
}

test("coucou", () => {
  render(<AfficherNom nom={"Ingrid"} />)
  expect(screen.getByTestId("coucou")).toHaveAttribute("src", "http://google.com")
})