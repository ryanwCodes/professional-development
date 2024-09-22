# Interview Prep

## Performance Optimizations

### HTML/CSS

    - use CSS properties that do not trigger the CPU intensive parts of the reflow (Style & Layout) when changing. For example, by using `transform` property for animations. See [CSS Triggers](https://csstriggers.com/)
    
    - Query Selectors
        - Simplify queries as much as possible
        ![alt text](<Screenshot 2024-09-20 at 14.14.19.png>)
        - use Id's for core containers
        - pick correct starting point for your queries. A closer ancestor in the DOM to the elements you want. 