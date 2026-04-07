const fs = require('fs');

console.log('Running tests...');

// Test 1 - pass hoga
if (fs.existsSync('./app.js')) {
    console.log('✅ Test 1 Passed: app.js exists');
} else {
    console.log('❌ Test 1 Failed: app.js not found');
    process.exit(1);
}

// Test 2 - INTENTIONALLY FAIL karo
if (fs.existsSync('./config.json')) {
    console.log('✅ Test 2 Passed: config.json exists');
} else {
    console.log('❌ Test 2 Failed: config.json not found!');
    process.exit(1);  // pipeline rok do!
}
