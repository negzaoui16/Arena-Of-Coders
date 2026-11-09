import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { EquipeService } from '../src/equipe/equipe.service';

async function testGroq() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const equipeService = app.get(EquipeService);
  
  // Using an existing team "ideep" from the DB which has 6 members
  const equipeId = '69e39c93cf4b6fccedefccde';
  
  console.log(`\n🤖 Demande d'analyse Synergy Agent pour l'équipe ${equipeId}...`);
  console.log(`(Cela va appeler l'API Groq Llama 3 en utilisant la clé du projet)\n`);
  
  const result = await equipeService.getTeamSynergy(equipeId);
  
  console.log('📊 Scores de l\'équipe (Radar):', result.axes);
  console.log('\n💬 Réponse générée par l\'IA (Groq) :\n');
  console.log('--------------------------------------------------');
  console.log(result.advice);
  console.log('--------------------------------------------------\n');
  
  await app.close();
}
testGroq().catch(console.error);
