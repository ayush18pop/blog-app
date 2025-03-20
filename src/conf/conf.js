import tinymce from "tinymce";

const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET),
  tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default conf;
