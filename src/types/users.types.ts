export interface ChangePasswordBody {
  currentPassword: string;
  newPassword: string;
}

export interface ChangingAvatarResponse {
  url: string;
}
