const fs = require('fs');

console.log('Running tests...');

// Test 1
if (fs.existsSync('./app.js')) {
    console.log('✅ Test 1 Passed: app.js exists');
} else {
    console.log('❌ Test 1 Failed: app.js not found');
    process.exit(1);
}

// Test 2
const appContent = fs.readFileSync('./app.js', 'utf8');
if (appContent.includes('3000')) {
    console.log('✅ Test 2 Passed: Port 3000 configured');
} else {
    console.log('❌ Test 2 Failed: Port not configured');
    process.exit(1);
}

// Test 3
if (appContent.includes('server.listen')) {
    console.log('✅ Test 3 Passed: Server listen configured');
} else {
    console.log('❌ Test 3 Failed: Server not configured');
    process.exit(1);
}

console.log('');
console.log('All tests passed! ✅');
