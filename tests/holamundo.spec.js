 import { test, expect } from '@playwright/test'; 


test('CPF_001 - Validación exitosa de login', async ({ page }) => {
  await page.goto('https://crm-matosso.leonardojose.dev/login');
  
  await page.locator('#email').fill('Nodo@nodo.com');

});