function generateCertificate(inputId, playerNum) {
  const userName = document.getElementById(inputId).value.trim();
  if (!userName) { 
    alert("Please enter your name before generating the certificate."); 
    return; 
  }

  const durationSeconds = players[playerNum].getDuration();
  const durationFormatted = formatDuration(durationSeconds);

  // ✅ Get video title dynamically
  const videoTitle = players[playerNum].getVideoData().title;

  const certWindow = window.open('', '_blank');
  certWindow.document.write(`
    <html>
    <head>
      <title>Certificate</title>
      <style>
        body {
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #fdfcfb, #e2d1c3);
          text-align: center;
          padding: 40px;
        }
        .certificate {
          background: white;
          border: 10px solid gold;
          outline: 5px solid #1e90ff;
          padding: 40px;
          border-radius: 15px;
          max-width: 800px;
          margin: auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        h1 { font-size: 2.5rem; color: #1e90ff; margin-bottom: 10px; }
        p { font-size: 1.2rem; color: #333; }
        .name {
          font-size: 1.8rem;
          font-weight: bold;
          margin: 20px 0;
          color: #d2691e;
          border-bottom: 2px solid #1e90ff;
          display: inline-block;
          padding: 5px 15px;
        }
        .details { margin-top: 20px; font-size: 1rem; color: #555; }
      </style>
    </head>
    <body>
      <div class="certificate">
        <h1>Certificate of Completion</h1>
        <p>This is to certify that</p>
        <div class="name">${userName}</div>
        <p>has successfully completed the course: <strong>${videoTitle}</strong></p>
        <div class="details">
          <p>Total Course Duration: <strong>${durationFormatted}</strong></p>
          <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </body>
    </html>
  `);
  certWindow.document.close();
}
