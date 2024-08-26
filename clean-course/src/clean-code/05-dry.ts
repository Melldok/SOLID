type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}


  isProductReady() : boolean {
    for (const key in this) {
        switch(typeof this[key]) {
            case 'string':
                if (this[key].length <= 0) throw Error(`The ${key} is required`);
                break;
            case 'number':
                if (this[key] <= 0) throw Error(`The ${key} is required`);
                break;
            default:
                throw Error(`The ${typeof this[key]} is not supported`);
        } 

    }

    return true;
  }

  toString() {
    // Codigo repetitivo y no escalable
    // if (this.name.length <= 0) throw Error("The name is required");
    // if (this.size.length <= 0) throw Error("The name is required");
    // if (this.price <= 0) throw Error("The price is required");


    if(!this.isProductReady()) return
    return `${this.name} (${this.price}), (${this.size}) `;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 100, "XL");

  console.log(bluePants.toString());
})();
