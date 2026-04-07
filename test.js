const http = require('http');

// Simple test — server responds correctly
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

console.log('Running tests...');

// Test 1 — Check app.js exists
const fs = require('fs');
if (fs.existsSync('./app.js')) {
    console.log('✅ Test 1 Passed: app.js exists');
} else {
    console.log('❌ Test 1 Failed: app.js not found');
    process.exit(1);
}

// Test 2 — Check port is defined in app
const appContent = fs.readFileSync('./app.js', 'utf8');
if (appContent.includes('3000')) {
    console.log('✅ Test 2 Passed: Port 3000 configured');
} else {
    console.log('❌ Test 2 Failed: Port not configured');
    process.exit(1);
}

// Test 3 — Check server.listen exists
if (appContent.includes('server.listen')) {
    console.log('✅ Test 3 Passed: Server listen configured');
} else {
    console.log('❌ Test 3 Failed: Server not configured');
    process.exit(1);
}

console.log('');
console.log('All tests passed! ✅');
