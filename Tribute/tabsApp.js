/**local API for contents */


const information = [
    {
        category: "Education",
        content: ["Born in Cambridge, England to an upper-middle-class family.",
            "His early education was greatly influenced by his father, John Neville Keynes - an economist and his mother Florence Ada Keynes - a social reformer.",
            "In 1897, he wont a King's Scholarship to Eton College where he display a talent for mathematics.",
            "In 1902, he left Eton for King's College, Cambridge where he received his first-class BA in mathematics.",
            "He took his civil service exams in 1906 and began his career as a clerk in the India Office"]
    },
    {
        category: "Accomplishment",
        content: [
            "After WWI, as the financial representative for the British Treasury, he argued against heavy reparation placed on Germany at the Versailles peace conference.",
            'Unfortunately, his arguments failed to convience other nations in demanding heavy reparation from Germany.  In 1919, he published "The Economic Consequences of the Peace"--predicting that the heavy financial burden placed on German citizens will result in WWII.',
            '1923, his publication "A Tract on Monetary Reform" advocated ending gold standard and depreciation of money in order to increase export boost job creation.',
            '1930, "Treatise On Money" was published to explain the relationship between unemployment, money, and price during the great depression.',
            '1933, Keynes advocated public spending as a mean to overcome the great depress in his work, "The Means to Prosperity."',
            '1936, "The General Theory of Employment, Interest and Money" was published and countered the idea that supply and demand would work itself out.  He argued that government intervention is needed to stimulate demand in times of high unemployment.'
            ]
    },
    {
    category: "Legacy",
        content: [
            'Help establish the World Bank and the International Monetary Fund after WWII.',
            'From the end of the Great Depression to the mid-1970s, he provided economic directions to policymakers to pull countries out of depressions and recessions.',
            "Keyne's views on the economy had become mainstream in the world's universities.",
            'Throughout the 1950s and 1960s, the developed and emerging free capitalist economies enjoyed high growth and low unemployment.',
            'During the financial crisis of 2007-2008, world economists turned to Keynesian economics to advocate government spending and regulation of the stock market.'
            ]
    },
    {
    category: "Test",
        content: [
            'aaaaaaaaaaaaaaaa',
            'bbbbbbbbbbbbbbbbb',
            'cccccccccccccccc',
            'dddddddddddddddddd',
            'eeeeeeeeeeeeeeeeee',
            'this is a test tab',
            'yay!! my dynamic tribute page worked'
            ]
        }
];


/**upate the date **/

const update = new Date();
document.getElementById('date').innerHTML = update;

/**add additional tabs automatically */
//select all the sections that will be controlled by javascript

const contentContainer = document.querySelector('.content-container');

const contents = document.querySelector('.content');


//create the number of tabs for each categories 

const btnContainer = document.querySelector('.button-container');

let numTab = [];
for (let i = 0; i < information.length; i++){
    numTab.push("auto");
}
let auto = numTab.join(' ')
btnContainer.style.gridTemplateColumns = auto;

//label each tab by category
const categoryTabs = document.querySelector('.button-container');

//select article container to place articles

const articleContainer = document.querySelector(".article-container");

function display(information) {
    const categories = information.reduce(function (tabBank, item) {
        if (!tabBank.includes(item.category)) {
            tabBank.push(item.category)
        }
        return tabBank;
    }, []);

    const categoryBTN = categories.map(function (item) {
        return `
        <span class = "content-btn" data-id =${item}>${item}</span>
        `
    }).join('');
    categoryTabs.innerHTML = categoryBTN;

    /*display articles*/
    const articleCategory = categories.map(function (item) {
        return `
         <article class = "content" id =${item} data-id =${item}>
            <h4>${item}</h4>
        </article>
           `
    }).join('');

    articleContainer.innerHTML = articleCategory;

    //if data-id == information.category, then add items inside of information.content to li that are created based on the length of each array

    const contentArticle = document.querySelectorAll('.content');

    let artList = [];
  
    contentArticle.forEach(function (item) {
        const ul = document.createElement('ul');
        item.appendChild(ul);

        const artId = item.dataset.id;

        information.map(function (item) {
            
            if (artId === item.category) {
                artList = [...item.content]
                
                for (let i = 0; i <= artList.length-1; i++) {
                    const li = document.createElement('li');

                    li.innerHTML = item.content[i];
                    ul.appendChild(li)
                }
            }
        })
    })

   

//select content-btns displaying border-radius for 1st and last tabs
    const contentBTN = document.querySelectorAll('.content-btn');
    contentBTN.forEach(function (categorytab) {
        const catId = categorytab.dataset.id;
        if (catId === categories[0]) {
            categorytab.classList.add('first-btn');
            categorytab.classList.add('active');
            
            const ele = document.getElementById(categories[0]);
            ele.classList.add('active');
        }
        if (catId === categories[categories.length-1]) {
            categorytab.classList.add('last-btn');
        }
    })//<--end of contentBTN 

/*activate the click functions of each tab-buttons to display article and turn tabs white */
    contentContainer.addEventListener('click', function (e) {
    const id = e.target.dataset.id;

    if (id) {
        contentBTN.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        contentArticle.forEach(function (content) {
            content.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
     }
})
}//<---end of display

/**display content upon windows load */

window.addEventListener("DOMContentLoaded", function () {
    display(information)
});