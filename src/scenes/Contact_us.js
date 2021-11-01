import React from "react";
import ContactLeft from "../parts/ContactLeft"
import ContactRight from "../parts/ContactRight"

export default function Contact_us() {
  return (
    <div class="container-fluid">
      <section>
        <div class="row row-cols-sm-1 row-cols-sm-2 h-100">
            <ContactLeft></ContactLeft>
            <ContactRight></ContactRight>
        </div>
      </section>
    </div>
  );
}
