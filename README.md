# jquery.rangeselector
A simple, fast lightweight jQuery plugin for multi-select checkbox with shift key.  
Why fast ??  
Because the **id** is the fastest selector we know it.  

## Installation
Include script after the jQuery library.

``<script src="/path/to/jquery.rangeselector.js"></script>``

## Usage

### view.html

checkbox must give **prefix id + number**  

```html  
<form  id="foo">  
    <input id="range-select-1" type="checkbox">  
    <input id="range-select-2" type="checkbox">  
    ...  
</form>
```

### view.js

```javasrcipt
// prefix is optional, the default value is 'range-select'  
var prefix = 'boo';  
$('#foo').rangeselector(prefix);  
```

## Authors
Jason Ni  