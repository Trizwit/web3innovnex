/*class ContactData extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    

    function collectFormData() {

        let data = window.ftd.component_data(this);
        let name = data.name.get();
        let email = data.email.get();
        let phoneNumber = data.phoneNumber.get();
        let city = data.city.get();
        let message = data.message.get();
          
            var formData = {
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              city: city,
              message: message
            };
          
            return formData;
          }

    function getData(a){
        let data = window.ftd.component_data(this);
        let inputName = $contactDataObj.name;
        let inputEmail = currentEmail;
        let inputCity = currentCity;
        let inputNumber = currentNumber;
        let inputMessage = currentMessage;
        console.log("hello");
    }

  
        }
    
}

customElements.define('contact-data', ContactData); */

/*function get_data(a) {
    let inputName = a.name;
    //let inputEmail = a.email;
    //let inputCity = a.city;
    //let inputNumber = a.phoneNumber;
    //let inputMessage = a.message;
    console.log(inputName);
}*/

function show_alert(a) {
    alert(a);
}
    