import BasePage from "./BasePage";

class RegisterPage extends BasePage {

    get header () {
        return $('h1');
    }

    get paragraph () {
        return $('p');
    }

    get labelFirstName(){
        return $('//label[contains(text(),"First Name")]');
    }

    get labelLastName () {
        return $('//label[contains(text(),"Last Name")]');
    }

    get requiredFields () {
        return $$('//span[@class="invalid-feedback w-auto ml-2"]');
    }

    get firstNameInput() {
        return $('//input[@name=\'firstName\']');
    }

    get lastNameInput() {
        return $('//input[@name=\'lastName\']');
    }

    submitForm () {
        this.submitBtn.click();
    }



    open() {
        super.open('https://stage.pasv.us/user/register');
    }
}

export default new RegisterPage();



