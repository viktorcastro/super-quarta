/* ===========================================================================
   CONFIGURAÇÃO DO FIREBASE — Super Quarta

   Este arquivo fica AO LADO do index.html no GitHub e guarda a ligação com o
   seu banco de dados.

   >>> A grande vantagem: quando o Claude te mandar uma versão nova do
   >>> index.html, você troca SÓ o index.html. Este arquivo continua igual
   >>> e a conexão não se perde.

   Cole a configuração do Firebase entre as crases, no lugar de COLE_AQUI.
   Pode colar exatamente como o Firebase entrega, com o "const firebaseConfig ="
   na frente e o ";" no fim — o sistema entende do mesmo jeito.
   =========================================================================== */

window.SUPER_QUARTA_CONFIG = `
const firebaseConfig = {
  apiKey: "AIzaSyA_gWyMNEiFUnSBT6b4beiMyX5Y0MkXT8Q",
  authDomain: "super-quarta.firebaseapp.com",
  databaseURL: "https://super-quarta-default-rtdb.firebaseio.com",
  projectId: "super-quarta",
  storageBucket: "super-quarta.firebasestorage.app",
  messagingSenderId: "463545825981",
  appId: "1:463545825981:web:03d400162a4b37343415d4"
};
`;
