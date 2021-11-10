import react from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe("FormCoding", () => {
  test("renders form component", () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    expect(screen.getByText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
    expect(screen.getByText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
    expect(screen.getByText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
    expect(
      screen.getByText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toBeInTheDocument();
  });

  test("input text with false value", () => {
    render(<FormCoding />);
    //name
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "N4m3 Wrong" },
    });
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue("N4m3 Wrong");

    //email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailwrong" },
    });
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailwrong");

    //no hp
    fireEvent.input(screen.getByLabelText(/No Handphone/), {
      target: { value: "853" },
    });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(853);
  });

  test("input text valid value", () => {
    render(<FormCoding />);

    //nama
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Nama Benar" },
    });
    expect(screen.getByLabelText(/Nama/)).toHaveValue("Nama Benar");
    // expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).not.toBeInTheDocument();

    //email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "mail@valid" },
    });
    // expect(screen.getByText("Email Tidak Sesuai")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toHaveValue("mail@valid");

    //no hp
    fireEvent.input(screen.getByLabelText(/No Handphone/), {
      target: { value: "8123456789" },
    });
    // expect(screen.getByText('No Handphone Tidak Sesuai')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(8123456789);

    // Latar Belakang Pendidikan:

    // Kelas Coding yang Dipilih:

    //Foto Surat Kesungguhan:

    // Harapan Untuk Coding Bootcamp Ini:
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "Harapan Benar" },
    });
    expect(screen.getByLabelText(/Harapan/)).toHaveValue("Harapan Benar");
  });

  test("submit button with error", () => {
    render(<FormCoding />);
    jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Buku Hebat" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailmail.com" },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue("Buku Hebat");
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailmail.com");
  });
});
