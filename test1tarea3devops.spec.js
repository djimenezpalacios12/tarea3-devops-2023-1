// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("test1tarea3devops", function () {
    this.timeout(30000);
    let driver;
    let vars;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        vars = {};
    });
    afterEach(async function () {
        await driver.quit();
    });
    it("test1tarea3devops", async function () {
        // Test name: test1tarea3devops
        // Step # | name | target | value | comment
        // 1 | open | / |  |
        await driver.get("http://localhost:8001/");
        // 2 | setWindowSize | 1936x1048 |  |
        await driver.manage().window().setRect({ width: 1936, height: 1048 });
        // 3 | click | id=:r1:-tab-1 |  |
        await driver.findElement(By.id(":r1:-tab-1")).click();
        // 4 | click | css=#add-director-btn .w-16 |  |
        await driver.findElement(By.css("#add-director-btn .w-16")).click();
        // 5 | click | id=name |  |
        await driver.findElement(By.id("name")).click();
        // 6 | type | id=name | Dominic Senna |
        await driver.findElement(By.id("name")).sendKeys("Dominic Senna");
        // 7 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
        // 8 | click | css=#add-director-btn .w-16 |  |
        await driver.findElement(By.css("#add-director-btn .w-16")).click();
        // 9 | click | id=name |  |
        await driver.findElement(By.id("name")).click();
        // 10 | type | id=name | Washowski |
        await driver.findElement(By.id("name")).sendKeys("Washowski");
        // 11 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
        // 12 | click | id=:r1:-tab-0 |  |
        await driver.findElement(By.id(":r1:-tab-0")).click();
        // 13 | click | css=#add-movie-btn .w-16 |  |
        await driver.findElement(By.css("#add-movie-btn .w-16")).click();
        // 14 | click | id=title |  |
        await driver.findElement(By.id("title")).click();
        // 15 | type | id=title | matrix |
        await driver.findElement(By.id("title")).sendKeys("matrix");
        // 16 | click | id=description |  |
        await driver.findElement(By.id("description")).click();
        // 17 | type | id=description | Ciencia ficcion |
        await driver
            .findElement(By.id("description"))
            .sendKeys("Ciencia ficcion");
        // 18 | click | id=year |  |
        await driver.findElement(By.id("year")).click();
        // 19 | type | id=year | 1999 |
        await driver.findElement(By.id("year")).sendKeys("1999");
        // 20 | click | id=director_id |  |
        await driver.findElement(By.id("director_id")).click();
        // 21 | select | id=director_id | label=Washowski |
        {
            const dropdown = await driver.findElement(By.id("director_id"));
            await dropdown
                .findElement(By.xpath("//option[. = 'Washowski']"))
                .click();
        }
        // 22 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
        // 23 | click | css=#add-movie-btn .w-16 |  |
        await driver.findElement(By.css("#add-movie-btn .w-16")).click();
        // 24 | click | id=title |  |
        await driver.findElement(By.id("title")).click();
        // 25 | type | id=title | 60 segundos |
        await driver.findElement(By.id("title")).sendKeys("60 segundos");
        // 26 | click | id=description |  |
        await driver.findElement(By.id("description")).click();
        // 27 | type | id=description | autos |
        await driver.findElement(By.id("description")).sendKeys("autos");
        // 28 | click | id=year |  |
        await driver.findElement(By.id("year")).click();
        // 29 | type | id=year | 1998 |
        await driver.findElement(By.id("year")).sendKeys("1998");
        // 30 | click | id=director_id |  |
        await driver.findElement(By.id("director_id")).click();
        // 31 | select | id=director_id | label=Dominic Senna |
        {
            const dropdown = await driver.findElement(By.id("director_id"));
            await dropdown
                .findElement(By.xpath("//option[. = 'Dominic Senna']"))
                .click();
        }
        // 32 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
        // 33 | click | css=#add-movie-btn .w-16 |  |director_id option
        await driver.findElement(By.css("#add-movie-btn .w-16")).click();
        // 34 | mouseOver | css=#add-movie-btn .w-16 |  |
        {
            const element = await driver.findElement(
                By.css("#add-movie-btn .w-16")
            );
            await driver.actions({ bridge: true }).move(element).perform();
        }
        // 35 | mouseOut | css=#add-movie-btn .w-16 |  |
        {
            const element = await driver.findElement(By.css("body"));
            await driver
                .actions({ bridge: true })
                .move(element, 0, 0)
                .perform();
        }
        // 36 | click | id=title |  |
        await driver.findElement(By.id("title")).click();
        // 37 | type | id=title | batman inicia |
        await driver.findElement(By.id("title")).sendKeys("batman inicia");
        // 38 | click | id=description |  |
        await driver.findElement(By.id("description")).click();
        // 39 | type | id=description | DC |
        await driver.findElement(By.id("description")).sendKeys("DC");
        // 40 | click | id=year |  |
        await driver.findElement(By.id("year")).click();
        // 41 | type | id=year | 2008 |
        await driver.findElement(By.id("year")).sendKeys("2008");
        // 42 | click | id=director_id |  |
        await driver.findElement(By.id("director_id")).click();
        // 43 | select | id=director_id | label=Cristopher Nolan |
        {
            const dropdown = await driver.findElement(By.id("director_id"));
            await dropdown
                .findElement(By.xpath("//option[. = 'Cristopher Nolan']"))
                .click();
        }
        // 44 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
        // 45 | click | css=#add-movie-btn path |  |
        await driver.findElement(By.css("#add-movie-btn path")).click();
        // 46 | click | id=title |  |
        await driver.findElement(By.id("title")).click();
        // 47 | type | id=title | Interestelar |
        await driver.findElement(By.id("title")).sendKeys("Interestelar");
        // 48 | click | id=description |  |
        await driver.findElement(By.id("description")).click();
        // 49 | type | id=description | Ciencia ficcion |
        await driver
            .findElement(By.id("description"))
            .sendKeys("Ciencia ficcion");
        // 50 | click | id=year |  |
        await driver.findElement(By.id("year")).click();
        // 51 | type | id=year | -1 |
        await driver.findElement(By.id("year")).sendKeys("-1");
        // 52 | type | id=year | 2016 |
        await driver.findElement(By.id("year")).sendKeys("2016");
        // 53 | click | id=director_id |  |
        await driver.findElement(By.id("director_id")).click();
        // 54 | select | id=director_id | label=Cristopher Nolan |
        {
            const dropdown = await driver.findElement(By.id("director_id"));
            await dropdown
                .findElement(By.xpath("//option[. = 'Cristopher Nolan']"))
                .click();
        }
        // 55 | click | css=.h-min > .flex |  |
        await driver.findElement(By.css(".h-min > .flex")).click();
    });
});
