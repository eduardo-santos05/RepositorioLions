import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'

const raizDoProjeto = path.resolve(import.meta.dirname, '..')

dotenv.config({ path: path.resolve(raizDoProjeto, '.env') })

const uri = process.env.MONGO_URI

if (!uri) {
  console.error("❌ ERRO: Não foi possível carregar a variável MONGO_URI.");
  console.error(`O código tentou procurar o arquivo .env em: ${path.resolve(raizDoProjeto, '.env')}`);
  process.exit(1);
}

try {
  await mongoose.connect(uri, { dbName: "lionsdev" })
  console.log("🚀 Conectado ao MongoDB com sucesso!");
} catch (error) {
  console.error("❌ Falha na conexão com o banco:", error.message);
}

export default mongoose
