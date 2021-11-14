import React from "react";
import ContactInputLeft from "./components/ContactInputLeft";
import ContactInputRight from "./components/ContactInputRight";

export default function ContactInput() {
  return (
    <div class="container-fluid">
      <section>
        <div class="row row-cols-sm-1 row-cols-sm-2 h-100">
          <ContactInputLeft />
          <ContactInputRight />
        </div>
      </section>
    </div>
  );
}
