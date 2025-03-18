import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProject);
    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const acc = await this.account.create(ID.unique(), email, password, name);
      if (acc) {
        return this.login({ email, password });
      } else {
        return acc;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (err) {
      console.error(err);
    }
  }
}
const authService = new AuthService();

export default authService;
