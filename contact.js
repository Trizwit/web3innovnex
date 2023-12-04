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

        const shadow = this.shadowRoot;
        const div = document.createElement('div');
        div.textContent = numberToWords(num);
        div.style.color = 'orange';
        div.style.borderWidth = '1px';
        div.style.borderColor = 'yellow';
        div.style.borderStyle = 'dashed';
        div.style.padding = '10px';

        // `on_change()` method listen to any changes done
        // against the argument value in ftd.
        data.num.on_change(function () { 
            const changed_value = data.num.get();  
            div.textContent = numberToWords(changed_value);  
        }) 

        shadow.appendChild(div);
    }
}