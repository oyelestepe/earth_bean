// ...firebase config dosyanız...
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ...diğer configler...
};

const app = initializeApp(firebaseConfig);
export default app;
