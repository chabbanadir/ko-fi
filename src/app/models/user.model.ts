export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  about: string;
  imgprofil: string;
  imgcover: string;
  token!: string;
  category: string;

  constructor(
    id: number,
    email: string,
    password: string,
    name: string,
    about: string,
    imgprofil: string,
    imgcover: string,
    category: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.about = about;
    this.imgprofil = imgprofil;
    this.imgcover = imgcover;
    this.category = category;
  }
}
