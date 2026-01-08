// scripts/listModels.js
import dotenv from 'dotenv';
dotenv.config();

// Diagnóstico: ¿se ha cargado la API key?
console.log('👉 Iniciando listModels.js');
console.log('OPENAI_API_KEY=' + Boolean(process.env.OPENAI_API_KEY));

import OpenAI from 'openai';

try {
  // Instancia el cliente
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  // Lanza la llamada
  console.log('🔍 Listando modelos…');
  const resp = await openai.models.list();

  console.log('✅ Modelos disponibles:');
  for (const m of resp.data) {
    console.log('   •', m.id);
  }

} catch (err) {
  console.error('❌ Error en listModels.js:', err);
}