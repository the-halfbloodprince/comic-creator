export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_IMAGE_GEN_API_URL: string;
        NEXT_PUBLIC_IMAGE_GEN_AUTH_KEY: string;
    }
  }
}