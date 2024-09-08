 // Function to authenticate using license key
  async function authenticateLicenseKey(licenseKey) {
    const url = `https://keyauth.win/api/v1/`;
  
    const body = {
      type: 'login',
      key: KEYAUTH-DhDsao-6ypvzH-Mktxwj-OMnkHv-fBrf6H-qOYveG,
      ownerid: 'AQy6nxcoDL',
      app: 'Panel',
      secret: '606ac307e802354e7bef2b301b24690e65937e217f1d26d68aa20d57c748bc01'
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  
    const result = await response.json();
  
    if (result.success) {
      document.getElementById('message').innerHTML = "Login successful!";
      // Add further logic after successful login
    } else {
      document.getElementById('message').innerHTML = "Login failed: " + result.message;
    }
  }
  


