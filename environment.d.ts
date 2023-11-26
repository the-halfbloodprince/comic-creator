export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        IMAGE_GEN_API_URL: string;
        IMAGE_GEN_AUTH_KEY: string;
    }
  }
}