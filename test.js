import { Selector, ClientFunction } from 'testcafe';


const UIFrame = Selector('iframe').withAttribute('title', 'webviewer');
const pageComplete = ClientFunction(() => {
  return new Promise(resolve => {
    window.readerControl.docViewer.on('pageComplete', () => resolve())
  })
})

fixture `Getting Started`
  .page `http://localhost:3000/samples/viewing/viewing/`

test('My first test', async t => {
  await t.switchToIframe(UIFrame);
  await pageComplete();
})