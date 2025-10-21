// src/app/models/users/user.model.ts
export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date; // ISO string
  email: string;
  password: string;
  roles: string[]; // correspond à RoleName
  enabled?: boolean;
avatar: string; // URL de l'image
}
