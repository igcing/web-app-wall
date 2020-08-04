
export class Product {
  constructor(id:number, brand:string, 
              description:string,image:string,
                price:number, discount:number, newprice:number){
    this.id = id;
    this.brand = brand;
    this.description = description;
    this.image = image;
    this.price = price;
    this.discount = discount;
  }
    public id: number;
    public brand: string;
    public description: string;
    public image: string;
    public price: number;
    public discount : number;
    public newprice: number;

}
