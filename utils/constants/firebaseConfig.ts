import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_rVR6DkHucKdZrfgyn6xuJVoOuSTEqZI",
  authDomain: "healthapp-a18c2.firebaseapp.com",
  projectId: "healthapp-a18c2",
  storageBucket: "healthapp-a18c2.appspot.com",
  messagingSenderId: "215509209855",
  appId: "1:215509209855:web:440b8b76ce129bf59e32ca",
  measurementId: "G-QFGX3TQ7GL",
  databaseURL: "https://healthapp-a18c2-default-rtdb.firebaseio.com/",
};

// Inicialização do Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);

// Inicialização do serviço de mensagens
export const messaging = getMessaging(app);

// Exemplo de como configurar um listener para mensagens de foreground
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});
