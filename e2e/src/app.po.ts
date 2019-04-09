import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPoularButtonElementText() {
    return element(by.id('popularButton')).getText();
  }

  getTopRatedButtonElementText() {
    return element(by.id('TopRatedButton')).getText();
  }

  getWatchlistButtonElementText() {
    return element(by.id('WatchlistButton')).getText();
  }

  getLogoffButtonElementText() {
    return element(by.id('logOffButton')).getText();
  }

  getAddToWatchlistButtonElementText() {
    return element(by.id('addToWatchlistButton')).getText();
  }

  getRemoveFromWatchlistButtonElementText() {
    return element(by.id('removeFromWatchlistButton')).getText();
  }

  getaddCommentButtonElementText() {
    return element(by.id('addCommentButton')).getText();
  }

  getUpdateButtonElementText() {
    return element(by.id('updateCommentButton')).getText();
  }
}
