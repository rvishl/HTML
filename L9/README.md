7-JAN       mern     



1. Content - It is the actual content of the element.
2. Padding - It gives space inside the box.
3. Border - It defines the edge of your box (element).
4. Margin - It is used to add space outside of your element.

- Padding vs Margin -> When to use what?

Margin - To give space outside of the box.
Padding - To give space inside of the box.
Border - To style the edge of the box.

margin: 15px; - Single value - All 4 sides
margin: 15px 20px; - 2 Values - Vertical Horizontal
margin: 10px 15px 20px; - 3 Values - Top Horizontal Bottom
margin: 5px 10px 15px 20px; Top Right Bottom Left 

It is same for Padding also!!

Border ->

border-width: 2px;
border-style: solid;
border-color: green;

border: 2px solid #00FF00;
border: 4px solid; ✅
border: solid green; ✔ 
border: 1px red; ❎
border: dashed; ✔️
border: green; ⚔️

border-bottom-color: tomato;

border-radius: 5px;
border-bottom-right-radius: 30px;

1:25 hrs;

 border-radius: 5px;        - for all side(top-left, top-right, bottom-right, bottom-left)
 border-radius: 5px 10px;   - for two side(top-left & bottom-right, top-right & bottom-left)
 border-radius: 5px 10px 20px;  -for three side(top-left, top-right & bottom-left, bottom-right)
 border-radius: 5px 10px 20px 40px; - for four side individual(top-left, top-right, bottom-right, bottom-left)

 
 Positioning

 - relative: It will shift the element relative to it's initial position. We give where to shift and how much to shift by using top/left/bottom/right properties.

 - fixed - The element will position itself fixed inside the viewport!
    viewport: The polygon where the rendered content is shown.
 
- Position property: relative, fixed, absolute, sticky, static.
- when to use position fixed vs when to use position sticky.


Assingment: 
1. Create a triangle using div and border properties and align them as per the image.
2. Create a Navigation bar for your website and make it fixed at the top.