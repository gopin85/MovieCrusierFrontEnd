import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    browser.driver.manage().window().maximize();
    page.navigateTo();
    expect(browser.getTitle()).toEqual('AppTest');
  });

  it('should be able navigate to login page', () => {
    expect(browser.getCurrentUrl()).toContain('/movies/userLogin');
  });

  it('should be able navigate to register page', () => {
    browser.element(by.id('register')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/registeration');
    browser.sleep(1000);
  });

  it('should be able to register and login', () => {
    browser.element(by.id('userId')).sendKeys('gopin20');
    browser.element(by.id('password')).sendKeys('Tester99');
    browser.element(by.id('confirmPassword')).sendKeys('Tester99');
    browser.element(by.id('firstName')).sendKeys('Gopinath');
    browser.element(by.id('lastName')).sendKeys('Ramanathan');
    browser.element(by.id('register')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/userLogin');
  });

  it('should be able to login and navigate to popular', () => {
    browser.element(by.id('userLoginid')).sendKeys('gopin20');
    browser.element(by.id('passwordid')).sendKeys('Tester99');
    browser.element(by.id('loginButton')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/popular');
  });

  it('should display popular button', () => {
    page.navigateTo();
    expect(page.getPoularButtonElementText()).toEqual('Popular Movies');
  });

  it('should display top rated button', () => {
    page.navigateTo();
    expect(page.getTopRatedButtonElementText()).toEqual('Top Rated Movies');
  });

  it('should display watchlist button', () => {
    page.navigateTo();
    expect(page.getWatchlistButtonElementText()).toEqual('Watchlist');
  });

  it('should display movies given in search', () => {
    browser.isElementPresent(by.className('form-control'));
    browser.element(by.className('form-control')).sendKeys('Star')
    browser.element(by.id('SearchButton')).click()
    expect(browser.getCurrentUrl()).toContain('searchlist/Star')
    const searchItems = element.all(by.className('mat-card-title'));
    expect(searchItems.count()).toBe(20);
    for (let i = 0; i < 1; i += 1)
      expect(searchItems.get(i).getText()).toContain('Star');
  });

  it('should navigate to top_rated', () => {
    browser.element(by.id('TopRatedButton')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/top_rated');
    const searchItems = element.all(by.css('.movie-thumbnail'));
    expect(searchItems.count()).toBe(20);
  });

  it('should navigate to movie-details page', () => {
    browser.element(by.className('movie-image')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/movie_details');
    browser.sleep(10000);
  });

  it('should contain add to watchlist button', () => {
    expect(page.getAddToWatchlistButtonElementText()).toEqual('Add to watchlist');
  });

  it('should add to watchlist', () => {
    browser.element(by.id('addToWatchlistButton')).click()
    browser.sleep(10000);
  });

  it('should contain Remove from watchlist button', () => {
    expect(page.getRemoveFromWatchlistButtonElementText()).toEqual('Remove from watchlist');
  });

  it('should navigate to watchlist page', () => {
    browser.element(by.id('WatchlistButton')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/watchlist');
    browser.sleep(1000);
  });

  it('should add a popular movie to watchlist', () => {

    browser.element(by.id('popularButton')).click()
    browser.element(by.xpath("//img[@alt='Venom']")).click()
    browser.element(by.id('addToWatchlistButton')).click()
    browser.sleep(1000);
    browser.element(by.id('WatchlistButton')).click()
    expect(browser.element(by.xpath("//img[@alt='Venom']")))
  });

  it('should be able to log off', () => {
    browser.element(by.id('logOffButton')).click()
    expect(browser.getCurrentUrl()).toContain('/movies/userLogin');
  });
});
