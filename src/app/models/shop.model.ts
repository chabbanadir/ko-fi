export class Shop {

    id: number;
    name: string;
    category: string;
    idsarticles: string;
    userid: string;
    
    constructor(
      id: number,
      name: string,
      category: string,
      idsarticles: string,
      userid: string,
    ) 
    {
      this.id = id;
      this.name = name;
      this.category = category;
      this.userid = userid;
      this.idsarticles = idsarticles;

    }
  }
  