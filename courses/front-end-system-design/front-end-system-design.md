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

Also: requestAnimationFrame() is useful for ensuring animations run 60fps and does not block rendering

### Compoistion Layers

![alt text](<Screenshot 2024-09-20 at 13.37.20.png>)

Better to use Graphical layer, but be careful, it's expensive

### DOM API

#### Performance Best Practices

![alt text](<Screenshot 2024-09-20 at 14.04.53.png>)

Add/Removing elements is very costly

## Observer API

![alt text](<Screenshot 2024-09-20 at 14.56.09.png>)
### Resize Observer
![alt text](<Screenshot 2024-09-25 at 11.11.42.png>)

## Virtualization
![alt text](<Screenshot 2024-09-26 at 09.29.55.png>)

![alt text](<Screenshot 2024-09-26 at 09.30.22.png>)

## Application State
![alt text](<Screenshot 2024-09-27 at 11.25.49.png>)

### Networking
![alt text](<Screenshot 2024-10-02 at 10.12.41.png>)

## Performance Optimization

![alt text](<Screenshot 2024-10-15 at 10.29.56.png>)

### LCP
1. JS Bundle Optimization 
    - ES6 vs ES2020 will result in very different bundle sizes
    - So we should instruct compiler to prepare several budles based on js version
2. Code Split
    - Can use with "preload" (high priority) and "prefetch" (low  priority)
3.  Code Mini & Compression
    - gzip vs brotli (20-30% more efficient, supported by most browsers, maybe not old ones)
4. Deferred Loading
    - says we don't need it for first load
    - good for analytics scripts

## Images

![alt text](<Screenshot 2024-10-15 at 11.54.08.png>)

* webp is designed to replace jpg, png, and gif
* Make sure you compress images, svgs

## Fonts
![alt text](<Screenshot 2024-10-15 at 12.15.46.png>)

# Performance Optimization Summary 

### Rendering
![alt text](<Screenshot 2024-10-15 at 12.17.48.png>)

### Javascript
![alt text](<Screenshot 2024-10-15 at 12.19.41.png>)

#### Images
1. Compress imagees for web
2. use optimized formats   
3. Use SVG Path compression

