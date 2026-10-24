import test, { expect } from '@playwright/test';

test.describe("Validaciones Login", () => {
    
    test("CPF_001 Validación con datos correctos", async ({ page}) => {
        
        //Ir al site
        await page.goto("https://ecommerce-js-test.vercel.app/");

        //Seleccionar un elemento
        const linkLogin= page.getByRole('link', { name: 'Login' })

        //Ejecutar una acción
        await linkLogin.click();

        //Selecciona caja de texto y completa con valores name y password
        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");
        await page.getByPlaceholder('Enter your password').fill("admin123");

        //Validar resultado obtenido con lo esperado
        await expect (page.getByText('Logout', { exact: true })).toBeVisible();



    })


});