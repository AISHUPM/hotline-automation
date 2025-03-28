const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// ✅ Step 1: Create ZIP file of the Allure report
const output = fs.createWriteStream(path.join(__dirname, 'allure-report.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log(`✅ Allure report zipped (${archive.pointer()} bytes)`);

    // Send email after zipping is complete
    sendEmail();
});

archive.on('error', (err) => {
    console.error(`❌ Error creating ZIP: ${err}`);
    throw err;
});

archive.pipe(output);
archive.directory('./allure-report', false);  // Add the report folder to the ZIP
archive.finalize();

// ✅ Step 2: Email Configuration
const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aishwarya.p@vahan.co',         // Sender's email
            pass: 'dors ckkr pnlh kjie'          // App password
        }
    });

    const mailOptions = {
        from: 'akhil@vahan.co',                   // From email
        to: 'aishwarya.p@vahan.co',               // Receiver email
        subject: 'Appium Test Execution Report',
        text: 'Please find the attached Appium test report.',
        attachments: [
            {
                filename: 'allure-report.tar.gz',
        content: fs.createReadStream('./allure-report.tar.gz')      // Attach the zipped report
            }
        ]
    };

    // ✅ Step 3: Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`❌ Email sending failed: ${error}`);
        } else {
            console.log(`✅ Email sent successfully: ${info.response}`);
        }
    });
};
