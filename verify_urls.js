const http = require('http');

const pages = [
  '/',
  '/taxi-service-in-jabalpur/',
  '/cab-service-jabalpur/',
  '/taxi-booking-jabalpur/',
  '/local-taxi-jabalpur/',
  '/outstation-taxi-jabalpur/',
  '/airport-taxi-jabalpur/',
  '/railway-station-taxi-jabalpur/',
  '/one-way-taxi-jabalpur/',
  '/round-trip-taxi-jabalpur/',
  '/car-rental-jabalpur/',
  '/routes/',
  '/routes/jabalpur-to-bhedaghat/',
  '/routes/jabalpur-to-kanha/',
  '/routes/jabalpur-to-bandhavgarh/',
  '/routes/jabalpur-to-khajuraho/',
  '/routes/jabalpur-to-pachmarhi/',
  '/routes/jabalpur-to-katni/',
  '/routes/jabalpur-to-mandla/',
  '/routes/jabalpur-to-nagpur/',
  '/routes/jabalpur-to-bhopal/',
  '/routes/jabalpur-to-indore/',
  '/about/',
  '/contact/',
  '/sitemap.xml',
  '/robots.txt'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3005${path}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        // Extract Title and H1 if HTML
        const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
        const h1Match = data.match(/<h1[^>]*>([^<]+)<\/h1>/i);
        const hasSchema = data.includes('application/ld+json');
        
        resolve({
          path,
          status: res.statusCode,
          length: data.length,
          title: titleMatch ? titleMatch[1].trim() : (path.endsWith('.xml') || path.endsWith('.txt') ? 'Static Asset' : 'None'),
          h1: h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : (path.endsWith('.xml') || path.endsWith('.txt') ? 'N/A' : 'None'),
          schema: hasSchema
        });
      });
    });
    req.on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('--- STARTING VERIFICATION OF ALL 26 URLS ---');
  let passed = 0;
  for (const page of pages) {
    const result = await checkUrl(page);
    if (result.status === 200) {
      passed++;
      console.log(`✓ [${result.status}] ${result.path.padEnd(35)} | Schema: ${result.schema ? 'YES' : 'NO '} | Title: ${result.title.substring(0, 45)}...`);
    } else {
      console.error(`✗ FAILED: ${result.path} - ${JSON.stringify(result)}`);
    }
  }
  console.log(`\nRESULT: ${passed}/${pages.length} URLs Passed 200 OK!`);
}

run();
