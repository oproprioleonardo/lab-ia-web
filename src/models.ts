export interface SessionData {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Assistant {
  id: string;
  name: string;
  company: string;
  createdAt: Date;
}