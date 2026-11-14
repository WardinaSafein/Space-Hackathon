const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
 testDir:'./tests', timeout:30000, retries:1,
 reporter:[['list'],['html',{open:'never'}]],
 use:{baseURL:'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure'},
 projects:[{name:'chromium',use:{...devices['Desktop Chrome']}}],
 webServer:{command:'python3 -m http.server 4173 --bind 127.0.0.1',url:'http://127.0.0.1:4173',timeout:30000,reuseExistingServer:!process.env.CI}
});
