// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';
const test = QUnit.test;

test('renderDogCard should accept a dog object and return an HTML Element node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>Barry</p><img src="./assets/Corgi.jpeg"></div></a>';
    
    const dog = {
        name: 'Barry',
        breed: 'Corgi',
        id: 2
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
