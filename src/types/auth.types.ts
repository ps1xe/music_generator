export interface LoginBody {
  email: string;
  password: string;
}

export interface RegistrationBody {
  email: string;
  username: string;
  password: string;
}

export interface ResetPasswordBody {
  token: string;
  newPassword: string;
}

export interface GetLinkToResetPasswordBody {
  email: string;
}

export interface Profile {
  email: string;
  username: string;
  avatar: string;
}

export interface AuthState {
  email: string;
  username: string;
  avatar: string;
}
