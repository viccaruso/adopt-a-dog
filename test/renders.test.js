// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';
const test = QUnit.test;

test('renderDogCard should accept a dog object and return an HTML Element node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>Barry</p><img src="./assets/corgi.jpeg"></div></a>';
    
    const dog = {
        name: 'Barry',
        breed: 'corgi',
        id: 2
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '<a href="./detail/?id=2"><div class="dog-card"><p>Barry</p><img src="./assets/corgi.jpeg"></div></a>');
});
test('renderDogDetail should accept a dog object and return an HTML Element node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="dog-detail"><p class="name">Barry</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">undefined years old</p><p class="breed">corgi</p></div><p class="description"></p></div>';
    
    const dog = {
        name: 'Barry',
        breed: 'corgi',
        id: 2
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(dog).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '<div class="dog-detail"><p class="name">Barry</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">undefined years old</p><p class="breed">corgi</p></div><p class="description"></p></div>');
});
