export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Initiative {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}