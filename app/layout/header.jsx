"use client";

import { FaOpencart } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  const expand = "lg";
  return (
    <div className="w-full">
      <Navbar
        expand={expand}
        className="shadow-lg rounded-none p-3 bg-gray-800 mb-[4%]"
      >
        <Container
          fluid
          className="flex flex-row items-center justify-between px-4 py-0"
        >
          <Navbar.Brand
            className="flex gap-4 font-bold"
            href="/"
            style={{
              fontWeight: "bolder",
              fontSize: "1.5rem",
              color: "#fff",
              marginRight: "2rem",
            }}
          >
            <FaOpencart />
            Fake Shop
          </Navbar.Brand>
          <Nav className="flex flex-row gap-4 items-center font-bold">
            <NavDropdown title={<span className="font-bold">Choices</span>}>
              <NavDropdown.Item href="/products/7">
                <span className="font-bold">Best selling</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/13">
                <span className="font-bold">Best price</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/5">
                <span className="font-bold">High Tier</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/favorites" className="font-bold">
              Favorites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
