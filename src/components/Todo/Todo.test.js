import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index"; 

describe("Todo Tests", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test("varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test("Input ve button dökümanda bulunmalı", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("Inputa string girilip butona baslınca listeye eklenmeli", () => {
        //inputu doldur
        const name = "Merve";
        userEvent.type(input, name);

        //butonu tıkla
        userEvent.click(button);

        //bekleme
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});



