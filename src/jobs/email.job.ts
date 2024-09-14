import cron from "node-cron";
import { CaseDataSource } from "../domain/datasources/case.datasources";
import { EmailService } from "../domain/services/email.service"
import { CasesModel } from "../data/models/case.model";
import { generateCaseEmailTemplate } from "../templates/email.template";


export const emailJob = async () => {
  const emailService = new EmailService();
  const caseDataSource = new CaseDataSource();

  cron.schedule('*/10 * * * * *', async () => {
    try {
      const cases = await CasesModel.find({ isEmailSent: false });
      if (!cases.length) {
        console.log("No hay incidentes para enviar correos");
        return;
      }
      console.log(`Procesando ${cases.length} incidentes.`);

      await Promise.all(
        cases.map(async (caseS) => {
          const htmlBody = generateCaseEmailTemplate(
            caseS.age,
            caseS.genre,
            caseS.lat,
            caseS.lng
          )
          await emailService.sendEmail({
            to: "mauricio.martineez11@gmail.com",
            subject: `Incidente :${caseS._id}`,
            htmlBody: htmlBody
          });
          console.log(`Correo enviado para el incidente con ID: ${caseS.id}`);

          await caseDataSource.updateCase(caseS._id.toString(), { ...caseS, isEmailSent: true });

          console.log(`Incidente actualizado con ID: ${caseS._id}`);
        })
      );
    } catch (error) {
      console.error("Error durante el envio de correos");
    }
  });
}