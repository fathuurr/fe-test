export interface LoginResponse {
  message: string;
  code: number;
  status: boolean;
  dataProfile: {
    uuid: string;
    email: string;
    id: number;
    clientId: string;
    idRole: number;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}
