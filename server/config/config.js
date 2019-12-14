// ============================
// Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;



// ============================
// Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// ============================
// Vencimiento del token
// ============================
process.env.CADUCIDAD_TOKEN = 1000 * 60 * 60 * 24 * 30;


// ============================
// Seed de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';


// ============================
// Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;



// ============================
// Google Client Id
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '967985692999-aje7hra1rqqpg2qn6auhra4sajv03s8b.apps.googleusercontent.com';