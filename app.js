class App {
    constructor() {
        console.log("app works")
        this.$form = document.querySelector('#form')
        this.$noteTitle = document.querySelector('#note-title')
        this.$formButtons = document.querySelector('#form-buttons')
        this.addEventListners();
    }

    addEventListners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
        })
    }

    handleFormClick() {
        const isFormClicked = this.$form.contains(event.target)

        if(isFormClicked) {
            //open form
            this.openForm();
        } else {
            //close form 
            this.closeForm();
        }
    }

    openForm() {
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }

    closeForm() {
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
    }
}

new App();