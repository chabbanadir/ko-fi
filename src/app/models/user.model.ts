export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    is_creator: boolean;
    token!: string;
  
    constructor(id: number, email: string, password: string, name: string, is_creator: boolean) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.name = name;
      this.is_creator = is_creator ;
    }
  }