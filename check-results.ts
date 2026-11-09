import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkResults() {
  try {
    const competitions = await prisma.competition.findMany({
      where: { title: "Hackathon 13:48" },
      include: {
        checkpoints: {
          include: {
            submissions: {
              include: {
                participant: {
                  include: {
                    user: true
                  }
                }
              }
            }
          },
          orderBy: {
            order: 'asc'
          }
        }
      }
    });

    if (competitions.length === 0) {
      console.log('Hackathon "Hackathon 13:48" not found.');
      return;
    }

    for (const competition of competitions) {
      console.log(`\nResults for ${competition.title} (ID: ${competition.id}):`);
      console.log(`Created At: ${competition.createdAt.toLocaleString()}`);
      console.log('-----------------------------------');

      for (const cp of competition.checkpoints) {
        console.log(`\nCheckpoint ${cp.order} (${cp.title}) - Due: ${cp.dueDate.toLocaleString()}`);
        if (cp.submissions.length === 0) {
          console.log('  No submissions yet.');
        } else {
          for (const sub of cp.submissions) {
            const userName = sub.participant?.user ? `${sub.participant.user.firstName} ${sub.participant.user.lastName}` : 'Unknown';
            console.log(`  Participant: ${userName}`);
            console.log(`    Status: ${sub.status}`);
            console.log(`    Score: ${sub.internalAiScore !== null ? sub.internalAiScore : 'Pending'}`);
            console.log(`    Notes/Feedback: ${sub.notes || 'None'}`);
            console.log(`    Submitted At: ${sub.submittedAt ? sub.submittedAt.toLocaleString() : 'N/A'}`);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error fetching results:', err);
  } finally {
    await prisma.$disconnect();
  }
}

checkResults();
