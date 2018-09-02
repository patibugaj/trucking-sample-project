This project uses Contentful. Client can edit content text and some assets in that platform. 

## Notes:
1. In the mockup, the menu item `HOME` has a blue line at the bottom and one of the `READ MORE` buttons has a different background color. I assumed they are `hover` styles.
2. On mockup, the text in navigation items is not centered. Because of the _pixel perfect_ project requirement, I styled it according to the mockup. In real project I would inquire if it shouldn't be centered instead.
3. Due to the _pixel perfect_ requirement, the page is not RWD.
4. The text content of the four offer boxes from the _offer_ section is supplied by Contentful. So I decided it will make more sense to make the respective graphics also available through that source instead of making them static assets. 

## Development
Supply CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environmental variables before running the project localy.