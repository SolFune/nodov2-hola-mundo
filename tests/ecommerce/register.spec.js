import test, { expect } from '@playwright/test';
import { afterEach, beforeEach } from 'node:test';

test.describe("Registro de usuario", () => {
   
    test.beforeEach(async ({ page })  => {
        //Ir al site
        await page.goto("https://ecommerce-js-test.vercel.app/");
        //Seleccionar un elemento
        const botonRegistro = page.getByRole('link', { name: 'Register' })
        //Ejecutar una acción
        await botonRegistro.click();
    });

    test.afterEach( async ({ page}) => {
        console.log("Prueba finalizada");
    });

    test("CPF_001 Registro de usuario con datos correctos", async ({ page}) => {
                //Selecciona caja de texto y completa con valores name y password
        await page.getByRole('textbox', { name: 'Full Name' }).fill("Solange");
        await page.getByRole('textbox', { name: 'Email Address' }).fill("sfune@example.com");
        await page.getByLabel('Password', { exact: true }).fill("admin123");
        await page.getByLabel('Confirm Password').fill("admin123");
        await page.getByRole('button', { name: 'Create Account' }).click();
        //Validar resultado obtenido con lo esperado
        await expect (page.getByText('Logout', { exact: true })).toBeVisible();
    })

     test("CPF_002 Registro de usuario con largo de password menor a 6 caracteres", async ({ page}) => {
        await page.getByRole('textbox', { name: 'Full Name' }).fill("Nadia");
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");
        await page.getByLabel('Password', { exact: true }).fill("admin");
        await page.getByLabel('Confirm Password').fill("admin");
        await page.getByRole('button', { name: 'Create Account' }).click();
        await expect (page.getByText('Password must be at least 6 characters long', { exact: true })).toBeVisible();
    })

    test("CPF_003 Registro de usuario con correo ya existente", async ({ page}) => {
        await page.getByRole('textbox', { name: 'Full Name' }).fill("Mical");
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");
        await page.getByLabel('Password', { exact: true }).fill("admin123");
        await page.getByLabel('Confirm Password').fill("admin123");
        await page.getByRole('button', { name: 'Create Account' }).click();
       await expect (page.getByText('Email already registered', { exact: true })).toBeVisible();    
    });

});