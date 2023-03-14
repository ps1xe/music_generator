export interface LoginBody {
  email: string;
  password: string;
}

export interface RegistrationBody {
  email: string;
  username: string;
  password: string;
}

export interface GetLinkToResetPasswordBody {
  email: string;
}

export interface AuthenticationResponse {
  email: string;
  username: string;
  avatar: string;
}
