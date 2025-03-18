import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProject);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (err) {
      console.error(err);
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        slug
      );
    } catch (err) {
      console.error(err);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabase,
        conf.appwriteCollection,
        slug
      );
    } catch (err) {
      console.error(err);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try{
        return await this.databases.listDocuments(
            conf.appwriteDatabase, 
            conf.appwriteCollection,
            queries
        )
    }
    catch(err){
      console.error(err);
    }
}

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file);
        }
        catch(err){
            console.error(err);
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucket
                ,fileId);
        }
        catch(err){
            console.error(err);
        }
    }

    async filePreview(fileId){
        try{
            return await this.bucket.getFilePreview(
                conf.appwriteBucket,
                fileId
            );
        }
        catch(err){
            console.error(err);
        }
    }

}

const service = new Service();
export default service;
