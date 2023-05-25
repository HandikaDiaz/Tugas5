// class

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getInfo() {
        return `The Car is a ${this.brand} ${this.model}`;
    }
}

class testimonial {
    #quote = ""
    #image = ""

    constructor(quote, image) {
        this.#quote = quote;
        this.#image = image;
    }

    get quote() {
        return this.#quote;
    }

    get image() {
        return this.#image;
    }

    get author() {
        throw new Error("getAuthor() must be implemented");
    }

    get testimonial() {
        return `<div class="testimonial-image">
                    <img class="testimonial-profile" 
                         src="${this.image}" 
                         alt="" />
                    <p class="quote">
                        ${this.quote}
                    </p>
                    <p class="author">- ${this.author}</p>
                </div>`;
    }
}

class AuthorTestimonial extends testimonial {
    #author = ""

    constructor(author, quote, image) {
        super(quote, image);
        this.#author = author
    }

    get author() {
        return this.#author
    }
}

class companyTestimonial extends testimonial {
    #company = ""

    constructor(company, quote, image) {
        super(quote, image)
        this.#company = company
    }

    get author() {
        return this.#company + " Company"
    }
}

const testimonial1 = new AuthorTestimonial(
    "Alexandria",
    "Jagalah Kebersihan"
);

let testimonialData = [testimonial]
let testimonialHTML = ''

for (let i = 0; i < testimonial.length; author++) {
    testimonialHTML + testimonialData
}