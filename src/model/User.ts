export default interface UserModel {
  uid: string;
  name: string | null;
  email: string | null;
  token: string;
  provider: string | undefined;
  imageUrl: string | null;
}
