const { test, expect } = require('@playwright/test');

test('navigation, case evidence, conclusion', async ({page}) => {
  const errors=[]; page.on('pageerror', e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#title.active')).toBeVisible();
  await page.locator('#title [data-go="briefing"]').click();
  await expect(page.locator('#briefing.active')).toBeVisible();
  await page.locator('#briefing [data-go="board"]').click();
  await expect(page.locator('#grid button.card')).toHaveCount(5);
  await page.locator('#grid [data-case="spirit"]').click();
  await expect(page.locator('#case.active')).toBeVisible();
  await expect(page.locator('#caseCard button.clue')).toHaveCount(3);
  for(const clue of await page.locator('#caseCard button.clue').all()) await clue.click();
  await page.locator('#toGuess').click();
  await expect(page.locator('#caseCard button.opt')).toHaveCount(3);
  await page.locator('#caseCard button.opt').first().click();
  await page.locator('#toReveal').click();
  await expect(page.locator('#caseCard .reveal')).toBeVisible();
  await page.locator('#caseCard [data-go="board"]').click();
  await expect(page.locator('#progress')).toContainText('1 of 5');
  expect(errors).toEqual([]);
});

test('all cases open, mobile has no horizontal overflow', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await page.locator('#title [data-go="briefing"]').click();
  await page.locator('#briefing [data-go="board"]').click();
  for(const id of ['spirit','opportunity','ingenuity','lander','reflector']){
    await page.locator('#grid [data-case="'+id+'"]').click();
    await expect(page.locator('#case.active')).toBeVisible();
    await page.locator('#case .case-top [data-go="board"]').click();
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+2)).toBe(true);
});
