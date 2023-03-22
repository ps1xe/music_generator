export interface ChangePasswordBody {
  currentPassword: string;
  newPassword: string;
}

export interface ChangingAvatarResponse {
  url: string;
}

export interface ProfileState{
  email: string;
  username: string;
  avatar: string;
}

export interface Profile {
  email: string;
  username: string;
  avatar: string;
}
