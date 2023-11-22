import {Builder, By, Key} from 'selenium-webdriver';

describe('Selenium Usuario', ()=>{
    it('deve permitir a atualização dos dados e mostrar o resultado da alteração', async ()=>{
        // Configurar o navegador
        let driver = await new Builder().forBrowser('chrome').build();
        
        // Acessa a aplicação
        await driver.get('http://localhost:3000/usuario');  
        
        // Clica no botão atualizar
        await driver.findElement(By.id('btn_atualizar')).click();
        
        // Digita novos dados e clica em enviar
        await driver.findElement(By.id('nome')).sendKeys('Maria');
        await driver.findElement(By.id('email')).sendKeys('maria@gmail.com');
        await driver.findElement(By.id('btn_enviar')).click();    

        // Captura os dados que estão sendo exibidos na tela
        let nomenomeusuario = await driver.findElement(By.id('nomeusuario'));
        let novoemailusuario = await driver.findElement(By.id('emailusuario'));

        // Realiza a comparação
        expect(await nomenomeusuario.getText()).toEqual('Maria');
        expect(await novoemailusuario.getText()).toEqual('maria@gmail.com');
    });
});

