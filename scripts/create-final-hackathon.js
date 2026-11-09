const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createHackathon() {
  const startDate = new Date('2026-04-22T22:54:00+01:00');
  const endDate = new Date('2026-04-22T23:30:00+01:00');

  try {
    const hackathon = await prisma.competition.create({
      data: {
        title: 'Hackathon Test Final - 22:54',
        description: 'Test final avec instructions et sécurité.\nCP1: 22:55',
        status: 'RUNNING',
        startDate: startDate,
        endDate: endDate,
        difficulty: 'MEDIUM',
        rewardPool: 1500,
        maxParticipants: 100,
        isActive: true,
        antiCheatEnabled: true,
        antiCheatThreshold: 70,
        createdBy: '69e38773d4534e76aff9dc39',
      },
    });

    console.log(`✅ Hackathon créé: ${hackathon.id}`);

    await prisma.competitionCheckpoint.createMany({
      data: [
        {
          competitionId: hackathon.id,
          title: 'Checkpoint 1 : IA Visage + Écran',
          order: 1,
          dueDate: new Date('2026-04-22T23:10:00+01:00'),
          isMandatory: true,
        },
        {
          competitionId: hackathon.id,
          title: 'Checkpoint 2 : Finalisation',
          order: 2,
          dueDate: new Date('2026-04-22T23:30:00+01:00'),
          isMandatory: true,
        }
      ]
    });

    console.log('✅ Checkpoints créés.');
  } catch (e) {
    console.error('❌ Erreur:', e);
  } finally {
    await prisma.$disconnect();
  }
}

createHackathon();
