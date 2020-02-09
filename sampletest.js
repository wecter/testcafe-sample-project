import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Hans Gruber')
        .click('#submit-button')

    //const articleHeader = await Selector('.result-content').find('h1');

    //let headerText = await articleHeader.innerText;

        .expect(Selector('#article-header').innerText).eql('Thank you, Hans Gruber!');
});

