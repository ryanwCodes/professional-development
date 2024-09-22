# Front End System Design

## Core Fundamentals

### Box Model
Layers of the Box Model
Innermost first
1. Content
2. Padding
3. Border
4. Margin

### Browser Formatting Context

#### Different Families of Contexts

1. Flex
2. Grid
3. Inline
4. Block

### Position
1. Static
    - the default
2. relative
    - same as default, but final position is defined by top, right, bottom, left
    - removed from normal, doesn't affect other elements
    - new stacking context
3. Absolute
    - new stacking context when z-index is not 0
    - no space reserved for it
    is placed nearest it's closest positioned ancestor
    - final position is defined by top, right, bottom, left

### Reflow

![alt text](<Screenshot 2024-09-20 at 13.17.57.png>)

Possible Optimization: use CSS properties that do not trigger the CPU intensive parts of the reflow (Style & Layout). For example, by using `transform` property for animations.

### Compoistion Layers

![alt text](<Screenshot 2024-09-20 at 13.37.20.png>)

Better to use Graphical layer, but be careful, it's expensive

### DOM API

#### Performance Best Practices

![alt text](<Screenshot 2024-09-20 at 14.04.53.png>)

Add/Removing elements is very costly

## Observer API

![alt text](<Screenshot 2024-09-20 at 14.56.09.png>)

