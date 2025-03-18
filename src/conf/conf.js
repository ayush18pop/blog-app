const conf = {
  appwriteURL: import.meta.env.VITE_APPWRITE_URL,
  appwriteProject: import.meta.env.VITE_APPWRITE_PROJECT,
  appwriteDatabase: import.meta.env.VITE_APPWRITE_DATABASE,
  appwriteBucket: import.meta.env.VITE_APPWRITE_BUCKET,
  appwriteCollection: import.meta.env.VITE_APPWRITE_COLLECTION,
};

export default conf;
