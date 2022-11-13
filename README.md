## Virtual List Challenge

Implement a virtualized list from scratch within 48hrs

### How to start this app

-   Run `yarn` or `npm install` to install all dependencies
-   Run `yarn start` or `yarn start` in the project root folder to start the frontend and open
    [http://localhost:3000](http://localhost:3000) to view it in your browser

### Other commands

-   Run `yarn test:all` or `npm run test:all` to run all existing tests and see the coverage

### Due to time constraints and private commitments I had a chance to finish implementation only within MVP requirements:

-   page to list tickets and basic navigation (link to page)
-   handles a large amount of data (12.000 entries) without using any dependencies
-   row height is fixed
-   uses virtual list strategy for rendering without external libraries
-   backend is mocked and returns a new array of ticket on page load
-   frontend UI with React and fully is responsive

### How I would proceed if I had more time

-   discuss with UX the design and user flow and implement accordingly
-   implement missing CRUD functionality for tickets
-   look into improvement of the ScalableList to handle dynamic row heights
-   extend unit testing and implement E2E test for User journey
-   create design system for consistency of components
-   add proper navigation menu

### Learnings

-   virtual list strategy concept
-   virtualization list libraries
-   extra practice with font scalability
-   improved workload estimations
