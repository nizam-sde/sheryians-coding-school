# Div Tag - can be used as?

* Container - it is used to store a group of elements inside
* Shapes - to create shapes like - square, rectangle, circle

## Properties of background

* linear-gradient(orange, white, green)
* linear-gradient(to right , red, blue)             // direction
* linear-gradient(to right bottom , red, blue)      // diagonal direction
* linear-gradient(red 35%, blue)                    // if you want to control amount of color 

* radial-gradient(orange, white, green)
* conic-gradient(orange, white, green)


## Background Image

* background-image: url();
* background-size: cover;           contain etc
    * cover used width-wise
    * Contain used hight-wise
* background-position: center;
* background-repeat: no-repeat;


## Margin   - it is a imaginary space outside the container

* margin: 50px;     - margin is used from outside of the body of elemnt, buffer zone around element
* margin: 10px 20px;    -  10px top/bottom, 20px left/right 
* margin: 10px 20px 30px 40px;  -  10px top, 20px right, 30px bottom, 40px left (clockwise)
* margin: 10px 20px 30px;   -  10px top, 20px left/right, 30px bottom */


## Padding

* padding: 50px;     - padding is used from inside of the body of element, space b/w content & body
* padding: 10px 20px;    -  10px top/bottom, 20px left/right 
* padding: 10px 20px 30px 40px;  -  10px top, 20px right, 30px bottom, 40px left (clockwise)
* padding: 10px 20px 30px;   -  10px top, 20px left/right, 30px bottom */

## Border

* border : 2px solid black;
* border-radius : 5px;

## Nesting & responsive unit %

```
<div class= "Outer">
    <div class= "Inner">
    </div>
</>

So in this case inner share parent relationship with outer div due to nesting inside

in nesting if parent div size is changed
and child element has reponsive units 
then according to parent, child element will also change his shape & size

% is a responsive unit and depands upon parent so if parent size/unit changed then according to it , 
he will rearrange himself

 Unit Percentage % depends on its parent so acording to the parent child element adjust itself
```
> Colorzilla extension - color picker   