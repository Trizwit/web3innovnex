class ContactData extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let data = window.ftd.component_data(this);
        let name = data.name.get();
        let email = data.email.get();
        let phoneNumber = data.phoneNumber.get();
        let city = data.city.get();
        let message = data.message.get();

    }
}

customElements.define('contact-data', ContactData);